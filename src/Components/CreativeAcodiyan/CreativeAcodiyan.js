import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import React from "react";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";

const CustomExpandIcon = () => {
  return (
    <div>
      <div className="expandMoreIcon">
        <AddIcon />
      </div>
      <div className="removeExpandIcon">
        <RemoveIcon />
      </div>
    </div>
  );
};

const CreativeAcodiyan = ({ title, description }) => {
  return (
    <Accordion
      sx={{
        boxShadow: "none",
        border: "1px solid #e0e0e0",
        p: 2,
        "& .Mui-expanded": {
          "& .expandMoreIcon": {
            display: "none",
          },
          "& .removeExpandIcon": {
            display: "block",
            "& svg": {
              color: "primary.green",
            },
          },
        },
      }}
    >
      <AccordionSummary
        sx={{
          "& .removeExpandIcon": {
            display: "none",
          },
          "& p": {
            color: "primary.main",
            fontWeight: "bold",
          },
          "& .Mui-expanded": {
            "& p": {
              color: "primary.green",
            },
          },
        }}
        expandIcon={<CustomExpandIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography>{title}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography
          sx={{
            color: "#666666",
          }}
        >
          {description}
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
};

export default CreativeAcodiyan;
