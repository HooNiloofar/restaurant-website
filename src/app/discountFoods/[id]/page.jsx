"use client";
import MyCard from "@/app/components/MyCard";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import Link from "next/link";
import files from "../../../../data/db";
import { useEffect, useState } from "react";
import FoodCart from "@/app/components/FoodCart";
import { styled } from "@mui/material/styles";
import AddTooCard from "@/app/components/AddToCart";
import Navbar from "../../components/Navbar";

export default function CategoryPage({ params: { id } }) {
  const [discountFoods, setDiscountFoods] = useState([]);

  useEffect(() => {
    const discountMenu = files.foods?.filter((e) => e?.discount > 0);
    // console.log("discountMenu", discountMenu);
    setDiscountFoods(discountMenu);
  }, [id]);

  console.log("discountFoods", discountFoods);
  return (
    <Container>
      <Navbar />
      <Grid container spacing={2}>
        {discountFoods?.map((e) => (
          <Grid item xs={12} sm={6} md={4} key={e?.id}>
            <Link
              href={`/foodMenu/${e?.id}`}
              style={{ textDecoration: "none" }}
            >
              <FoodCart product={e} />
            </Link>
          </Grid>
        ))}
      </Grid>
      {/* <AddTooCard product={discountFoods} /> */}
    </Container>
  );
}
