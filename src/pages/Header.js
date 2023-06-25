import * as React from "react";
import AppBar from "@mui/material/AppBar";
// import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";

function Header() {
  return (
    <AppBar className="contain" position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <h1>TICKET PANEL</h1>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;
