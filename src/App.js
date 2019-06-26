import React from "react";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";

import CssBaseline from "@material-ui/core/CssBaseline";

import { Theme, StyledRoot } from "./App.styles";

import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Dashboard from "./containers/dashboard";
import { SnackbarProvider } from "notistack";

function App() {
  return (
    <SnackbarProvider maxSnack={3}>
      <React.Fragment>
        <CssBaseline />
        <MuiThemeProvider theme={Theme}>
          <StyledRoot>
            <AppBar position="static">
              <Toolbar>
                <Typography variant="h6">Solar Monitor</Typography>
              </Toolbar>
            </AppBar>
            <Dashboard />
          </StyledRoot>
        </MuiThemeProvider>
      </React.Fragment>
    </SnackbarProvider>
  );
}

export default App;
