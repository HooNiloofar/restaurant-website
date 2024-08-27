// import { Padding } from '@mui/icons-material'
// import { Box, Grid, Typography } from '@mui/material'
// import React from 'react'

// export default function Respose() {
//   return (
//     <>
//       <Box>
//         <Grid container sx={{ display: "flex", justifyContent: "center", alignContent: "center", paddingTop: "5rem" }}>
//           <Grid item  >
//             <Typography sx={{ textAlign: "center", fontSize: "1.2rem", color: "black", border: "2px solid rgb(153 27 27)  ", padding: "1rem", borderRadius: "20px", fontWeight: "500" }}>
//               ورود شما با موفقیت انجام شد.
//             </Typography>
//           </Grid>
//         </Grid>

//       </Box>

//     </>
//   )
// }

import React, { useEffect } from "react";
import { Grid, Typography, Box } from "@mui/material";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";

export default function Response({ setPageLevel }) {
  const router = useRouter();
  useEffect(() => {
    toast.success("ورود شما با موفقیت انجام شد.", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      onClose: () => {
        // setPageLevel({ level: 0, token: "" });
        router.push("/");
      },
    });
  }, [setPageLevel]);

  return (
    <Box>
      <ToastContainer />
      <Grid
        container
        sx={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          paddingTop: "5rem",
        }}
      >
        <Grid item>
          {/* <Typography
            sx={{
              textAlign: "center",
              fontSize: "1.2rem",
              color: "black",
              border: "2px solid rgb(153 27 27)",
              padding: "1rem",
              borderRadius: "20px",
              fontWeight: "500",
            }}
          >
            ورود شما با موفقیت انجام شد.
          </Typography> */}
        </Grid>
      </Grid>
    </Box>
  );
}
