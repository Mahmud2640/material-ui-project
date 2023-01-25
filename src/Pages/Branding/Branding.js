import { Box, styled } from "@mui/material";
import React from "react";

const BrandingWrapper = styled(Box)(({ theme }) => ({
  height: "70vh",
  backgroundColor: "rgba(122, 178, 89, 0.15)",
  padding: theme.spacing(4),
  margin: "4rem 0",
  clipPath: "polygon(0 0, 100% 0, 100% 85%, 0 100%)",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
}));

const Branding = () => {
  return <BrandingWrapper><Box>
     <Box>
          <img src="http://placehold.it/200x200" alt="logo" />
     </Box>
     </Box></BrandingWrapper>;
};

export default Branding;
