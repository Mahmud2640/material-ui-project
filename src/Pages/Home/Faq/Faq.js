import { Box } from "@mui/material";
import React from "react";
import CreativeAcodiyan from "../../../Components/CreativeAcodiyan/CreativeAcodiyan";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

const Faq = () => {
  return (
    <Box
      sx={{
        mb: 10,
      }}
    >
      <SectionTitle title="Frequently Asked" colored="Quesction" />
      <Box
        sx={{
          mt: 5,
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        <CreativeAcodiyan
          title="My name is Mahmud"
          description="about bangladesh"
        />
        <CreativeAcodiyan
          title="My name is Mahmud"
          description="about bangladesh"
        />
        <CreativeAcodiyan
          title="My name is Mahmud"
          description="about bangladesh"
        />
        <CreativeAcodiyan
          title="My name is Mahmud"
          description="about bangladesh"
        />
      </Box>
    </Box>
  );
};

export default Faq;
