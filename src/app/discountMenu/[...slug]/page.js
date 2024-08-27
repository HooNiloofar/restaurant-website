// "use client";
// import { useState, useEffect } from "react";
// import FoodCart from "../../components/FoodCart";

// export default function ResultPage({ searchParams }) {
//   const { menu, discount } = searchParams;
//   const [productsData, setProductsData] = useState([]);

//   useEffect(() => {
//     async function fetchData() {
//       const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
//       const url = `${baseUrl}/api/foods`;
//       try {
//         const res = await fetch(url);
//         if (!res.ok) {
//           throw new Error("Failed to fetch data");
//         }
//         const data = await res.json();

//         console.log("data", data);
//         let filteredData = data.list;
//         console.log("filteredData", filteredData);
//         if (menu) {
//           filteredData = filteredData;
//         }

//         if (discount) {
//           filteredData = filteredData.filter((item) => item.discount > 0);
//         }

//         setProductsData(filteredData);
//         console.log("productsDataaaaaaaaa", productsData);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     }

//     fetchData();
//   }, [menu, discount]);

//   return (
//     <>
//       {productsData.map((item, index) => (
//         <FoodCart key={index} product={item} />
//       ))}
//     </>
//   );
// }

// import FoodCart from "../../components/FoodCart";
// import { Typography, Grid, Container } from "@mui/material";
// export default async function ResultPage({ params }) {
//   // const category = params.category;
//   const discount = params.discount;
//   const menu = params.menu;
//   const slug = params.slug;

//   async function fetchCategoryData(slug) {
//     // const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
//     // const res = await fetch(`${baseUrl}/api/foods?category=${slug}`);
//     const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
//     const res = await fetch(`${baseUrl}/api/foods`);
//     if (!res.ok) {
//       throw new Error("Failed to fetch data");
//     }
//     const data = await res.json();
//     console.log("data", data);

//     if (!data.list) {
//       return [];
//     }

//     let filteredData = data.list;

//     if (menu) {
//       filteredData = filteredData;
//     }

//     if (discount) {
//       filteredData = filteredData.filter((item) => item.discount > 0);
//     }

//     return filteredData;
//   }

//   const result = await fetchCategoryData(slug);
//   // console.log("resultttttttttttt=====================================", result);

//   return (
//     // <>
//     //   {result &&
//     //     result.map((item, index) => <FoodCart key={index} product={item} />)}
//     // </>
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

///up was true

// import FoodCart from "../../components/FoodCart";

// export default async function ResultPage({ params }) {
//   const category = params.category;
//   const discount = params.discount;
//   const menu = params.menu;
//   const slug = params.slug ? params.slug[0] : null;

//   async function fetchCategoryData(slug) {
//     // const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
//     // const res = await fetch(`${baseUrl}/api/foods?category=${slug}`);
//     const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
//     const res = await fetch(`${baseUrl}/api/foods`);
//     if (!res.ok) {
//       throw new Error("Failed to fetch data");
//     }
//     const data = await res.json();
//     console.log("data", data);

//     if (!data.list) {
//       return [];
//     }

//     let filteredData = data.list;

//     if (menu) {
//       filteredData = filteredData;
//     }

//     return filteredData;
//   }
//   async function fetchDiscountData(slug) {
//     const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
//     const res = await fetch(`${baseUrl}/api/discount`);
//     if (!res.ok) {
//       throw new Error("Failed to fetch data");
//     }
//     const data = await res.json();
//     console.log("data", data);

//     if (!data.list) {
//       return [];
//     }

//     let filteredDiscountData = data.list;

//     if (discount) {
//       filteredDiscountData = filteredDiscountData;
//     }

//     return filteredDiscountData;
//   }

//   const DiscountResult = await fetchDiscountData(slug);
//   const result = await fetchCategoryData(slug);
//   // console.log("resultttttttttttt=====================================", result);

//   return (
//     <>
//       {result &&
//         result.map((item, index) => <FoodCart key={index} product={item} />)}
//       {DiscountResult &&
//         DiscountResult.map((item, index) => (
//           <FoodCart key={index} product={item} />
//         ))}
//     </>
//   );
// }

import FoodCart from "../../components/FoodCart";
import { Typography, Grid, Container } from "@mui/material";

export default async function ResultPage({ searchParams }) {
  const discount = searchParams.discount;
  const menu = searchParams.menu;
  const slug = searchParams.slug;

  async function fetchCategoryData(slug) {
    const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
    const queryParams = new URLSearchParams();

    if (discount) {
      queryParams.append("discount", discount);
    }

    const res = await fetch(`${baseUrl}/api/foods?${queryParams.toString()}`);
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await res.json();

    if (!data.list) {
      return [];
    }

    let filteredData = data.list;

    if (menu) {
      filteredData = filteredData;
    }

    return filteredData;
  }

  const result = await fetchCategoryData(slug);

  return (
    <Container sx={{ padding: "2rem 0" }}>
      <Typography variant="h4" gutterBottom>
        خوش آمدید!
      </Typography>
      <Grid container spacing={3}>
        {result &&
          result.map((item, index) => (
            <Grid item xs={12} sm={6} key={index}>
              <FoodCart product={item} />
            </Grid>
          ))}
      </Grid>
    </Container>
  );
}
