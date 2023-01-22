import { CssBaseline, ThemeProvider } from "@mui/material";
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Home from "./Pages/Home/Home";
import { theme } from "./Theme/theme";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [{ element: <Home />, path: "/home" }],
  },
]);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
      <CssBaseline />
    </ThemeProvider>
  );
}

export default App;
