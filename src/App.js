import { CssBaseline, ThemeProvider } from "@mui/material";
import React from "react";
import Router from "./Routes/Router";
import { theme } from "./Theme/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router />
      <CssBaseline />
    </ThemeProvider>
  );
}

export default App;
