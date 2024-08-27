// import FoodCart from "../../components/FoodCart";
// import { Typography, Grid, Container } from "@mui/material";
// import AllDiscountedMenu from "@/app/components/AllDiscountedFood";
// import AllMenu from "@/app/components/AllMenu";

// export default async function ResultPage({ params }) {
//   const category = params.category;
//   const menu = params.menu;
//   const discount = params;

//   async function fetchCategoryData(slug) {
//     const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
//     const queryParams = new URLSearchParams();

//     if (discount) {
//       queryParams.append("discount", discount);
//     }

//     const res = await fetch(`${baseUrl}/totalPage?${queryParams.toString()}`);
//     if (!res.ok) {
//       throw new Error("Failed to fetch data");
//     }
//     const data = await res.json();

//     if (!data.list) {
//       return [];
//     }

//     let filteredData = data.list;

//     if (menu) {
//       filteredData = filteredData;
//     }

//     return filteredData;
//   }

//   const result = await fetchCategoryData(slug);

//   return (
//     <Container sx={{ padding: "2rem 0" }}>
//       <Typography variant="h4" gutterBottom>
//         خوش آمدید!
//       </Typography>
//       <Grid container spacing={3}>
//         {result &&
//           result.map((item, index) => (
//             <Grid item xs={12} sm={6} key={index}>
//               <FoodCart product={item} />
//             </Grid>
//           ))}
//       </Grid>
//     </Container>
//   );
// }

// "use client";
// import { useEffect, useState } from "react";
// import { useRouter, useSearchParams } from "next/navigation";
// import { Typography, Grid, Container } from "@mui/material";
// import FoodCart from "../../../components/FoodCart";

// export default function ResultPage() {
//   const [result, setResult] = useState([]);
//   const router = useRouter();
//   const searchParams = useSearchParams();
//   const category = searchParams.get("category");
//   const discount = searchParams.get("discount");

//   useEffect(() => {
//     async function fetchData() {
//       const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
//       const queryParams = new URLSearchParams();

//       if (category) {
//         queryParams.append("category", category);
//       }
//       if (discount) {
//         queryParams.append("discount", discount);
//       }

//       const res = await fetch(`${baseUrl}/totalPage?${queryParams.toString()}`);
//       if (!res.ok) {
//         throw new Error("Failed to fetch data");
//       }
//       const data = await res.json();

//       if (data.list) {
//         setResult(data.list);
//       } else {
//         setResult([]);
//       }
//     }

//     fetchData();
//   }, [category, discount]);

//   return (
//     <Container sx={{ padding: "2rem 0" }}>
//       <Typography variant="h4" gutterBottom>
//         خوش آمدید!
//       </Typography>
//       <Grid container spacing={3}>
//         {result.map((item, index) => (
//           <Grid item xs={12} sm={6} key={index}>
//             <FoodCart product={item} />
//           </Grid>
//         ))}
//       </Grid>
//     </Container>
//   );
// }

// import { use } from "react";
import FoodCart from "../../../components/FoodCart";
import { Typography, Grid, Container, Box } from "@mui/material";
import AllMenu from "@/app/components/AllMenu";
import AllDiscountedMenu from "@/app/components/AllDiscountedFood";

export default function ResultPage({ params }) {
  const { category, discount } = params;
  // const result = use(() => fetchCategoryData(category, discount));

  async function fetchCategoryData({ category, discount }) {
    const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
    const queryParams = new URLSearchParams();

    if (category) {
      queryParams.append("category", category);
    }
    if (discount) {
      queryParams.append("discount", discount);
    }

    const res = await fetch(`${baseUrl}/api/foods?${queryParams.toString()}`);
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await res.json();
    console.log("dataaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", data);
    return data.list || [];
  }

  return (
    <Container sx={{ padding: "2rem 0" }}>
      <Typography variant="h4" gutterBottom>
        خوش آمدید!
      </Typography>
      <Grid container spacing={3}>
        <Box>
          <Typography>منوی غذا</Typography>
          <AllMenu category="menu" discount="false" />
        </Box>
        <Box>
          <Typography>منوی غذاهای تخفیف‌دار </Typography>
          <AllDiscountedMenu />
        </Box>
      </Grid>
    </Container>
  );
}
