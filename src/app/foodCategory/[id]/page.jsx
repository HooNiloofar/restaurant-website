// "use client";
// import MyCard from "@/app/components/MyCard";
// import { Box, Container, Typography } from "@mui/material";
// import Link from "next/link";
// import files from "../../../../data/db";
// import { useEffect, useState } from "react";

// export default function CategoryPage({ params: { id } }) {
//   const [foods, setFoods] = useState([]);
//   const [categoryName, setCategoryName] = useState(null);

//   useEffect(() => {
//     const relatedProducts = files?.foods?.filter(
//       (item) => item?.category_id == id
//     );
//     const category = files.foodCategories?.find((e) => e?.id == id);

//     setFoods(relatedProducts);
//     setCategoryName(category?.name);
//   }, [id]);

//   return (
//     <Container sx={{ display: "flex", flexDirection: "column" }}>
//       <Box>
//         {" "}
//         {categoryName && (
//           <Typography
//             variant="h6"
//             sx={{ paddingBottom: "2rem", textAlign: "center" }}
//           >
//             {" "}
//             {categoryName}
//           </Typography>
//         )}
//       </Box>
//       <Box sx={{ display: "flex", gap: "1.5rem" }}>
//         {foods?.map((x) => (
//           <Link
//             href={`foodMenu/${x?.id}`}
//             key={x?.id}
//             style={{ textDecoration: "none" }}
//           >
//             <MyCard title={x.name} imageUrl={x.img} />
//           </Link>
//         ))}
//       </Box>
//     </Container>
//   );
// }

"use client";
import MyCard from "@/app/components/MyCard";
import { Box, Container, Typography } from "@mui/material";
import Link from "next/link";
import files from "../../../../data/db";
import { useEffect, useState } from "react";

export default function CategoryPage({ params: { id } }) {
  const [foods, setFoods] = useState([]);
  const [categoryName, setCategoryName] = useState(null);

  useEffect(() => {
    const relatedProducts = files?.foods?.filter(
      (item) => item?.category_id == id
    );
    const category = files.foodCategories?.find((e) => e?.id == id);

    setFoods(relatedProducts);
    setCategoryName(category?.name);
  }, [id]);

  return (
    <Container sx={{ display: "flex", flexDirection: "column" }}>
      <Box>
        {categoryName && (
          <Typography
            variant="h6"
            sx={{ paddingBottom: "2rem", textAlign: "center" }}
          >
            {categoryName}
          </Typography>
        )}
      </Box>
      <Box sx={{ display: "flex", gap: "1.5rem" }}>
        {foods?.map((x) => (
          <Link
            href={`/foodMenu/${x?.id}`} // Absolute path
            key={x?.id}
            style={{ textDecoration: "none" }}
          >
            <MyCard title={x.name} imageUrl={x.img} />
          </Link>
        ))}
      </Box>
    </Container>
  );
}
