"use client";
import React, { useEffect, useState } from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { styled } from "@mui/material/styles";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import MyCard from "./MyCard";
import { Box, Container, Grid, Typography, Button } from "@mui/material";
import { useRouter } from "next/navigation";

export default function FoodMenuSlide() {
  const [foodMenu, setfoodMenu] = useState([]);
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
  const router = useRouter();

  const handleClick = () => {
    router.push(`/searchPage`);
  };

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("api/foods");
      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }
      var data = await res.json();
      if (data.list) {
        var list = data.list;
        setfoodMenu(list);
        console.log(foodMenu);
      }
    }
    fetchData();
  }, []);
  return (
    <Container sx={{ paddingTop: "2rem" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          paddingBottom: "0.7rem",
        }}
      >
        <Typography variant="h5" sx={{ paddingBottom: "5p", fontWeight: 400 }}>
          {" "}
          منوی غذا{" "}
        </Typography>
        <ShowMore onClick={handleClick}> نمایش همه</ShowMore>
      </Box>
      {/* <Swiper
        // install Swiper modules
        modules={[Navigation, A11y]}
        spaceBetween={50}
        slidesPerView={3}
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
        // breakpoints={{
        //   200: {
        //     slidesPerView: 1,
        //   },
        //   1024: {
        //     slidesPerView: 4,
        //   },
        // }}
      > */}
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
        {foodMenu.map((x) => (
          <SwiperSlide key={x?.id}>
            {" "}
            <Container>
              <Link
                href={`foodMenu/${x?.id}`}
                style={{ textDecorationLine: "none" }}
              >
                <MyCard title={x.name} imageUrl={x.img} />
              </Link>
            </Container>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
}
