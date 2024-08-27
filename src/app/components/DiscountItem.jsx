"use client";
import React, { useState, useEffect } from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "../CustumStyle.css"; // Import custom CSS
import MyCard from "./MyCard";
import { Container, Typography, Box, Button } from "@mui/material";
import Link from "next/link";
import { styled } from "@mui/material/styles";
import { useRouter } from "next/navigation";

const ShowMore = styled(Button)(({ theme }) => ({
  width: "100%",
  display: "flex",
  alignItems: "center",
  backgroundColor: "#fc036f",
  width: "90px",
  padding: "1px 1px",
  borderRadius: "10px",
  color: "white",
  marginBottom: "5px",
  boxShadow: theme.shadows[1],
  marginLeft: theme.spacing(1),
  "&:hover": {
    backgroundColor: "#ff5c9a",
    color: "white",
  },
}));

export default function DiscountItem() {
  const [discountProduct, setDiscountProduct] = useState([]);
  const router = useRouter();

  const handleClick = () => {
    router.push(`/searchPage?discount=${true}`);
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("/api/discount");
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await res.json();
        if (data.list) {
          setDiscountProduct(data.list);
        }
      } catch (err) {
        setDiscountProduct([]);
      }
    }
    fetchData();
  }, []);

  return (
    <Container sx={{ paddingTop: "2rem", paddingBottom: "2rem" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          paddingBottom: "0.7rem",
        }}
      >
        <Typography variant="h5" sx={{ paddingBottom: "5p", fontWeight: 400 }}>
          لیست تخفیف دارها
        </Typography>

        <ShowMore onClick={handleClick}>
          {/* <Link
            // href="/discountFoods"
            href="/discountMenu/discountFoods"
            // href={`/discountMenu/?${queryParams.toString()}`}
            style={{ textDecorationLine: "none", color: "white" }}
          > */}
          نمایش همه
          {/* </Link> */}
        </ShowMore>
      </Box>
      <Swiper
        modules={[Navigation, Scrollbar, A11y]}
        spaceBetween={10}
        slidesPerView={1} // Default for small screens
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        breakpoints={{
          640: {
            slidesPerView: 1, // Small devices
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2, // Medium devices
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3, // Large devices
            spaceBetween: 30,
          },
        }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {discountProduct?.map((product) => (
          <SwiperSlide key={product.id}>
            <Link
              href={`discountFoods/${product.id}`}
              // href={`/foodMenu/${product.id}`}
              style={{ textDecorationLine: "none" }}
            >
              <MyCard title={product.name} imageUrl={product.img} />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
}
