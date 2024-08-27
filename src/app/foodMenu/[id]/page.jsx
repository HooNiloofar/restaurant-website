"use client";
import MyCard from "@/app/components/MyCard";
import { Box, Button, Container, Typography } from "@mui/material";
import Link from "next/link";
import files from "../../../../data/db";
import { useEffect, useState } from "react";
import FoodCart from "@/app/components/FoodCart";
import { styled } from "@mui/material/styles";
import AddToCart from "../../components/AddToCart";
import Navbar from "../../components/Navbar";

export default function CategoryPage({ params: { id } }) {
  const [foods, setFoods] = useState([]);
  // useEffect(() => {
  //   async function fetchData() {
  //     const res = await fetch("/api/foods");
  //     if (!res.ok) {
  //       throw new Error("Failed to fetch data");
  //     }
  //     var data = await res.json();
  //     if (data.list) {
  //       var list = data.list;
  //       const foodMenu = list?.foods?.find((e) => e?.id == id);
  //       setFoods(foodMenu);
  //       console.log("lissssst", list);
  //       console.log("foooooods", foods);
  //       console.log("foodMenu", foodMenu);
  //     }
  //   }
  //   fetchData();
  // }, []);

  useEffect(() => {
    const foodMenu = files.foods?.find((e) => e?.id == id);
    // console.log("foodMenu", foodMenu);
    setFoods(foodMenu);
  }, [id]);

  // console.log("foods", foods);
  return (
    <Container sx={{ display: "flex", flexDirection: "column" }}>
      <Navbar />
      <Box sx={{ marginTop: "1rem" }}>
        {" "}
        {foods && (
          <Typography
            variant="h6"
            sx={{ paddingBottom: "2rem", textAlign: "center" }}
          >
            {" "}
            {foods?.name}
          </Typography>
        )}
      </Box>
      <Box sx={{ display: "flex", gap: "1.5rem" }}>
        {foods && (
          <Link href="/" key={id} style={{ textDecoration: "none" }}>
            <FoodCart product={foods} />
          </Link>
        )}
      </Box>
      <Box>
        <Link
          href="/"
          style={{
            fontSize: "0.875rem",
            fontWeight: "550",
            textDecoration: "none",
            // width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#fc036f",
            width: "90px",
            padding: "0.5rem 1rem",
            borderRadius: "10px",
            color: "white",
            margin: "1rem",
            "&:hover": {
              backgroundColor: "#ff5c9a",
              color: "white",
            },
          }}
        >
          بازگشت به صفحه‌ی اصلی
        </Link>
      </Box>
    </Container>
  );
}
