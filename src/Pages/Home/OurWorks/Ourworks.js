import { Box, Grid, IconButton, Tab, Tabs } from "@mui/material";
import React from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CreativeCard from "../../../Components/CreativeCard/CreativeCard";
import { cardData } from "./cardData";

const Ourworks = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ my: 5, mb: 10 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 5,
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
                border: (theme) =>
                  `1px solid ${
                    value === 0 ? "#959EAD" : theme.palette.primary.green
                  }`,
                color: "primary.main",
                mr: 1,
              }}
              onClick={() => setValue(value - 1)}
              disabled={value === 0}
            >
              <ArrowBackIcon />
            </IconButton>
            <IconButton
              sx={{
                border: (theme) =>
                  `1px solid ${
                    value === 3 ? "#959EAD" : theme.palette.primary.green
                  }`,
                color: "primary.main",
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
      <Box>
        <Grid container spacing={3} justifyContent="center">
          {cardData[value].map((image) => (
            <Grid item>
              <CreativeCard image={image} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Ourworks;
