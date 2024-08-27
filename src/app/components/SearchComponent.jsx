"use client";
import React from "react";
import FoodCart from "./FoodCart";
import { Box, Typography, Grid } from "@mui/material";
import Navbar from "./Navbar";

export default function SearchComponent({ data }) {
  // console.log("data====>", data);

  return (
    <Grid container spacing={2}>
      <Navbar />
      {data?.length > 0 ? (
        data.map((item, index) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            key={index}
            gap={5}
            sx={{
              marginRight: "0.5rem",
              // "@media (max-width: 600px)": {
              //   padding: "10px",
              //   marginX: "2px",
              // },
              // "@media (min-width: 601px) and (max-width: 959px)": {
              //   padding: "15px",
              // },
            }}
          >
            <FoodCart product={item} />
          </Grid>
        ))
      ) : (
        <Grid item xs={12}>
          <Typography variant="h6" sx={{ textAlign: "center" }}>
            !!!اطلاعاتی یافت نشد
          </Typography>
        </Grid>
      )}
    </Grid>
  );
}
