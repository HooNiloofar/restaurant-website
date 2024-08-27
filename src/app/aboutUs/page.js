import { Typography, Box } from "@mui/material";
import React from "react";

export default function AboutUs() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Typography
        variant="h3"
        sx={{
          textAlign: "center",
        }}
      >
        ABOUT US
      </Typography>
    </Box>
  );
}
