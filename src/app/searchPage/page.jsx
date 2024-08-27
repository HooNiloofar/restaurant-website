import React from "react";
import SearchComponent from "../components/SearchComponent";
import { styled } from "@mui/material/styles";
import { Button } from "@mui/material";
import Link from "next/link";

export default async function SearchPage({ searchParams }) {
  // const BackHome = styled(Button)(({ theme }) => ({
  //   width: "100%",
  //   display: "flex",
  //   alignItems: "center",
  //   backgroundColor: "#fc036f",
  //   width: "90px",
  //   padding: "1px 1px",
  //   borderRadius: "10px",
  //   color: "white",
  //   marginBottom: "5px",
  //   boxShadow: theme.shadows[1],
  //   marginLeft: theme.spacing(1),
  //   "&:hover": {
  //     backgroundColor: "#ff5c9a",
  //     color: "white",
  //   },
  // }));
  const searchedData = await fetchCategoryData(searchParams);
  return (
    <>
      <SearchComponent data={searchedData} />
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
    </>
  );
}

const fetchCategoryData = async (searchParams) => {
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
  let result = [];
  try {
    if (searchParams?.discount) {
      const res = await fetch(`${baseUrl}/api/foods?discount=true`);
      if (!res.ok) throw new Error("Failed to fetch data");
      const data = await res.json();
      if (data) result = data.list;
    } else if (searchParams?.category) {
      const res = await fetch(`${baseUrl}/api/foods`);
      if (!res.ok) throw new Error("Failed to fetch data");
      const data = await res.json();
      if (data)
        result = data.list?.filter(
          (item) => item?.category_id == searchParams?.category
        );
    } else if (searchParams?.query) {
      console.log("Searching for query:", searchParams.query); // Log the query
      const res = await fetch(
        `${baseUrl}/api/searches?query=${searchParams.query}`
      );
      console.log(
        "Fetching URL:",
        `${baseUrl}/api/search?query=${searchParams.query}`
      );
      if (!res.ok) throw new Error("Failed to fetch data");
      const data = await res.json();
      console.log("API Response Data:", data); // Log the API response
      if (data) result = data.list;
      console.log("API Response Data.list:", data?.list); // Log the API response
    } else {
      const res = await fetch(`${baseUrl}/api/foods`);
      if (!res.ok) throw new Error("Failed to fetch data");
      const data = await res.json();
      if (data) result = data.list;
    }
  } catch (error) {
    console.error("Error fetching data:", error);
  }
  return result;
};
