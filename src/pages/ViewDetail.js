import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Button from '@mui/material/Button';

const ViewDetail = (props) => {
  return (
    <>
      <Dialog
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          Ticket Details
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <ul>
              <li>
                Title: {props.row ? props.row.title : ""}  
              </li>
              <li>
                Department: {props.row ? props.row.department : ""}  
              </li>
              <li>
                Description: {props.row ? props.row.description : ""}
              </li>
              <li>
                Date: {props.row ? props.row.date : ""}
              </li>
              <li>
                Time: {props.row ? props.row.time : ""}
              </li>
            </ul>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={props.handleClose}>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default ViewDetail;
