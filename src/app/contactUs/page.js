import React from "react";
import { Typography, Box } from "@mui/material";
export default function ContactUs() {
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
        CONTACT US
      </Typography>
    </Box>
  );
}
