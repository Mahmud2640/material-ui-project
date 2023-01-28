import { Box, IconButton, Tab, Tabs } from "@mui/material";
import React from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const Ourworks = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ my: 5 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <SectionTitle
          title="Here are some of"
          colored="Our works"
          sx={{
            textAlign: "left",
          }}
        />
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Tabs
            value={value}
            onChange={handleChange}
            centered
            sx={{
              "& .MuiTabs-indicator": {
                display: "none",
              },
              "& .MuiButtonBase-root": {
                textTransform: "capitalize",
              },
              "& .Mui-selected": {
                color: "primary.green",
                fontWeight: "bold",
              },
            }}
          >
            <Tab label="All" />
            <Tab label="Interior" />
            <Tab label="Exterior" />
            <Tab label="Building" />
          </Tabs>
          <Box>
            <IconButton
              sx={{
                border: "1px solid #959EAD",
                mr: 1,
              }}
              onClick={() => setValue(value - 1)}
              disabled={value === 0}
            >
              <ArrowBackIcon />
            </IconButton>
            <IconButton
              sx={{
                border: "1px solid #959EAD",
              }}
              onClick={() => setValue(value + 1)}
              disabled={value === 3}
            >
              <ArrowBackIcon
                sx={{
                  transform: "rotate(180deg)",
                }}
              />
            </IconButton>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Ourworks;
