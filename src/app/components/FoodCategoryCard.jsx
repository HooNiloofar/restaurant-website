"use client";
import { useState } from "react";
import { useEffect } from "react";
import { Container } from "postcss";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import Link from "next/link";
import { Grid } from "@mui/material";

export default function FoodCategoryCard() {
  const [foodCategories, setFoodCategories] = useState([]);
  useEffect(() => {
    // debugger;

    async function fetchData() {
      const res = await fetch("/api/foodCategory");
      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }
      // console.log(res)
      var data = await res.json();
      // console.log(data)
      if (data.list) {
        var list = data.list;
        setFoodCategories(list);

        // console.log(list);
      }
    }
    fetchData();

    console.log(foodCategories);
  }, []);

  return (
    <>
      <Grid container spacing={3} sx={{ paddingTop: "1.5rem" }}>
        <Typography variant="h6" sx={{ paddingBottom: "5p", fontWeight: 400 }}>
          {" "}
          دسته بندی ها{" "}
        </Typography>

        {foodCategories &&
          foodCategories.map((item, index) => (
            <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
              <Link href={`/foodCategory/${item.id}`}>
                <Card
                  variant="outlined"
                  sx={{ borderRadius: "20px", height: "90", width: "90" }}
                >
                  <CardMedia
                    component="img"
                    image={item?.img}
                    title={item?.name}
                    sx={{
                      borderRadius: "20px",
                      height: "110px",
                      width: "110px",
                      overFlow: "hidden",
                      margin: "auto",
                      padding: "1rem",
                    }}
                  />
                  <CardContent sx={{ textAlign: "center" }}>
                    <Typography
                      gutterBottom
                      sx={{
                        fontWeight: "600",
                        paddingTop: "0.2rem",
                      }}
                      variant="h6"
                      component="div"
                    >
                      {item?.name}
                    </Typography>
                    {/* <Image src={item?.img} alt={item?.name} width={200} height={110} style={{ borderRadius: "20px" }} /> */}
                  </CardContent>
                </Card>
              </Link>
            </Grid>
          ))}
      </Grid>
    </>
  );
}
