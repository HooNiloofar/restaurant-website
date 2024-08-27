// export default function SearchPage({ params }) {
//   const seachTerm = params.searchTerm;
//   const [foods, setFoods] = useState(null);
//   useEffect(() => {
//     async function fetchData() {
//       console.log(seachTerm);
//       console.log(params);
//       console.log(params.searchTerm);

//       const res = await fetch(`/api/search/${params?.seachTerm}`).catch((err) =>
//         console.log(err)
//       );
//       console.log(files);
// const res = await fetch("/api/searches");
//       if (!res.ok) {
//         throw new Error("Failed to fetch data");
//       }
//       var data = await res.json();
//       if (data.list) {
//         var list = data.list;
//         setFoods(list);
// console.log(list)
//       }
//     }
//     fetchData();
//   }, []);
//   return (
//     <div>
//       {foods && foods.length === 0 && (
//         <Typography variant="h1">No results found</Typography>
//       )}
//       {foods && <Results foods={foods} setFoods={setFoods} />}
//     </div>
//   );
// }
// export default function SearchPage() {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [results, setResults] = useState([]);
//   const [loading, setLoading] = useState(false);

//   const handleSearch = async () => {
//     setLoading(true);
//     const res = await fetch(`/api/searches?searchItem=${searchTerm}`);
//     const data = await res.json();
//     setResults(data.list);
//     setLoading(false);
//   };

// "use client";
// import { Container, Grid } from "@mui/material";
// import { useState } from "react";
// import Results from "@/app/components/Results";
// import files from "../../../../data/db.json";

// export default function SearchPage({ params }) {
//   const searchTerm = params.searchTerm;
//   const [query, setQuery] = useState("");
//   const [results, setResults] = useState([]);
//   // const handleSearch = async (event) => {
//   //   event.preventDefault();
//   //   const res = await fetch(`/api/searches?query=${query}`);
//   //   const data = await res.json();
//   //   setResults(data);
//   // };
//   const list = files.filter((x) => {
//     x?.name?.toLowerCase()?.includes(searchTerm)?.toLowerCase();
//   });

//   setResults(list);
//   return (
//     <>
//       <Container>
//         <Grid container sm={12} md={3} lg={4}>
//           <Grid item>
//             {results?.map((x, i) => {
//               <Results key={i} results={results} />;
//             })}
//           </Grid>
//         </Grid>
//       </Container>
//     </>
//   );
// }

// "use client";
// import { Container, Grid, Typography } from "@mui/material";
// import { useState, useEffect } from "react";
// import Results from "@/app/components/Results";
// import files from "../../../../data/db.json";

// export default function SearchPage({ params }) {
//   const searchTerm = params?.searchTerm;
//   const [results, setResults] = useState([]);

//   useEffect(() => {
//     if (searchTerm) {
//       console.log(`Search Term: ${searchTerm}`);
//       const item = [...files?.foods, ...files?.foodCategories].filter((x) =>
//         x?.name?.includes(searchTerm)
//       );

//       setResults(item);
//       console.log(`Filtered item:`, item);
//     } else {
//       setResults([]);
//     }
//   }, [searchTerm]);
//   // debugger;
//   // console.log(searchTerm);
//   return (
//     <>
//       <Container>
//         <Grid
//           container
//           spacing={2}
//           sx={{
//             paddingTop: "2.5rem",
//             display: "flex",
//             justifyContent: "center",
//             alignContent: "center",
//           }}
//         >
//           {results.length == 0 ? (
//             <Typography
//               variant="h6"
//               sx={{
//                 fontWeight: "600",
//                 paddingTop: "5rem",
//               }}
//             >
//               نتیجه ای یافت نشد!!!
//             </Typography>
//           ) : (
//             results.map((x) => (
//               <Grid item key={x.id}>
//                 <Results results={x} />
//               </Grid>
//             ))
//           )}
//         </Grid>
//       </Container>
//     </>
//   );
// }

"use client";
import { Container, Grid, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Results from "@/app/components/Results";
import files from "../../../../data/db.json";

export default function SearchPage({ params: { searchTerm } }) {
  const [results, setResults] = useState([]);
  console.log(`search term is${searchTerm}`);
  useEffect(() => {
    if (searchTerm) {
      const item = [...files?.foods, ...files?.foodCategories].filter((x) =>
        x?.name?.includes(searchTerm)
      );

      setResults(item);
    } else {
      setResults([]);
    }
  }, [searchTerm]);

  console.log(`the result is :${results}`);
  return (
    <Container>
      <Grid
        container
        spacing={2}
        sx={{
          paddingTop: "2.5rem",
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        {results.length === 0 ? (
          <Typography
            variant="h6"
            sx={{
              fontWeight: "600",
              paddingTop: "5rem",
            }}
          >
            نتیجه‌ای یافت نشد!!!
          </Typography>
        ) : (
          results.map((x) => (
            <Grid item key={x.id}>
              <Results result={x} />
            </Grid>
          ))
        )}
      </Grid>
    </Container>
  );
}

SearchPage.propTypes = {
  params: PropTypes.shape({
    searchTerm: PropTypes.string,
  }).isRequired,
};
