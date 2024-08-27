"use client";
import React, { useEffect, useState } from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import MyCard from "./MyCard";
import { Container, Typography } from "@mui/material";
import Link from "next/link";
import { Style } from "@mui/icons-material";
export default function FoodCategorySlider() {
  const [categorySlide, setCategorySlide] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("api/foodCategory");
      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }
      var data = await res.json();
      if (data.list) {
        var list = data.list;
        setCategorySlide(list);
        console.log(categorySlide);
      }
    }
    fetchData();
  }, []);
  return (
    <Container sx={{ paddingTop: "2rem", paddingBottom: "2rem" }}>
      <Typography variant="h5" sx={{ paddingBottom: "5p", fontWeight: 400 }}>
        دسته بندی‌ها{" "}
      </Typography>

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
        {categorySlide?.map((item) => (
          <SwiperSlide key={item.id}>
            <Link
              href={`/searchPage?category=${item?.id}`}
              style={{ textDecorationLine: "none" }}
            >
              <MyCard title={item.name} imageUrl={item.img} />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
}
