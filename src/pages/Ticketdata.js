import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import FormDialog from "./FormDialog";
import ViewDetail from "./ViewDetail";

const columns = [
  // { field: "id", headerName: "ID", width: 450 },
  { field: "title", headerName: "Title", width: 450 },
  { field: "date", headerName: "Date", width: 450 },
  { field: "time", headerName: "Time", width: 450 },
];

export default function Ticketdata() {
  const [selectedRow, setSelectedRow] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const [openDetail, setOpenDetail] = React.useState(false);
  const [rows, setRows] = React.useState([]);

  React.useEffect(() => {
    const rowsString = localStorage.getItem("rows");
    const parsedRows = JSON.parse(rowsString);
    setRows(parsedRows || []);
  }, []);

  const handleAddRow = (rowData) => {
    const updatedRows = [...rows, rowData];
    setRows(updatedRows);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpenDetail(false);
  };

  // Sort rows by time added (latest first)
  const sortedRows = React.useMemo(() => {
    return [...rows].sort((a, b) => b.time.localeCompare(a.time));
  }, [rows]);

  return (
    <div className="contain">
      <AppBar position="static" style={{ background: "#ffffff" }}>
        <Toolbar>
          <Typography
            variant="h4"
            component="div"
            sx={{ flexGrow: 1, color: "black", fontWeight: "600" }}
          >
            My Tickets
          </Typography>
          <Button
            variant="contained"
            disableElevation
            style={{ fontWeight: "600" }}
            onClick={handleClickOpen}
          >
            New Ticket
          </Button>
        </Toolbar>
      </AppBar>
      <FormDialog open={open} setOpen={setOpen} handleAddRow={handleAddRow} />
      <ViewDetail
        open={openDetail}
        handleClose={handleClose}
        row={selectedRow}
      />
      <DataGrid
      sx={{margin:'20px', boxShadow:'2px 2px 22px -5px #000000'}}
        rows={sortedRows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 10 },
          },
        }}
        pageSizeOptions={[10, 50, 100]}
        onCellClick={(params) => {
          setSelectedRow(params.row);
          setOpenDetail(true);
        }}
      />
    </div>
  );
}
