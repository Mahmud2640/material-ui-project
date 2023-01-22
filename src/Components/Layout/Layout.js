import { Box, Container } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";

function Layout() {
  return (
    <Box>
      <Container>
        <Header />
        <Outlet />
      </Container>
    </Box>
  );
}

export default Layout;
