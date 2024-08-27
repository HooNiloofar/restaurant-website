"use client";
import localFont from "next/font/local";
import { createTheme } from "@mui/material/styles";

const vazirFont = localFont({
  src: [
    {
      path: "./fonts/Vazir-FD-WOL.woff2",
      weight: "400",
      style: "normal",
    },
  ],
});

const theme = createTheme({
  typography: {
    fontFamily: vazirFont.style.fontFamily,
  },
});

export default theme;
