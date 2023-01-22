import { Box, Checkbox, CssBaseline } from "@mui/material";
import React from "react";
import Sidebar from "../src/Components/Sidebar/Sidebar";
import Herocard from "../src/Components/HeroCard/Herocard";

const App = () => {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  return (
    <Box>
      <CssBaseline />
      <Sidebar></Sidebar>
      <Checkbox
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
        {...label}
      />

      <Herocard></Herocard>
    </Box>
  );
};

export default App;
