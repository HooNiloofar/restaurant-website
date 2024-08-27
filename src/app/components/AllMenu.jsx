"use client";
import React, { useEffect, useState } from "react";
import { Box, Container, Typography } from "@mui/material";
import FoodCart from "./FoodCart";

export default function AllMenu() {
  const [foodMenu, setFoodMenu] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("api/foods");
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await res.json();
        if (data.list) {
          setFoodMenu(data.list);
          console.log("foodMenu===================================", data.list);
        }
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  return (
    <Container sx={{ paddingTop: "2rem" }}>
      <Box>
        <Typography variant="h5" sx={{ paddingBottom: "5px", fontWeight: 400 }}>
          {" "}
          منوی غذا{" "}
        </Typography>
      </Box>
      <Box>
        {foodMenu &&
          foodMenu.map((food) => (
            <Box key={food.id} sx={{}}>
              <FoodCart product={food} />
            </Box>
          ))}
      </Box>
    </Container>
  );
}
