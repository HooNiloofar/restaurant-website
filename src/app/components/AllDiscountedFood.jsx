"use client";
import React, { useEffect, useState } from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import FoodCart from "./FoodCart";
import Link from "next/link";

export default function AllDiscountedMenu() {
  const [discounted, setDiscounted] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("api/discount");
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await res.json();
        if (data.list) {
          setDiscounted(data.list);
          console.log("foodMenu===================================", data.list);
        }
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  return (
    <Container
      sx={{ paddingTop: "2rem", display: "flex", flexDirection: "column" }}
    >
      <Box>
        <Typography variant="h5" sx={{ paddingBottom: "5px", fontWeight: 400 }}>
          {" "}
          لیست غذاهای تخفیف‌دار{" "}
        </Typography>
      </Box>
      <Grid container spacing={2}>
        {/* <Grid item xs={12} sm={6} md={4}>
          {discounted &&
            discounted.map((food) => (
              <Box key={food.id} sx={{}}>
                <FoodCart product={food} />
              </Box>
            ))}
        </Grid> */}
        {discounted?.map((food) => (
          <Grid item xs={12} sm={6} md={4} key={food?.id}>
            <Link
              href={`/foodMenu/${food?.id}`}
              style={{ textDecoration: "none" }}
            >
              <FoodCart product={food} />
            </Link>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
