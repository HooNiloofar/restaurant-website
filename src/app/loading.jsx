// import { Container } from "@mui/material";

// export default function loading() {
//   return (
//     <Container
//       sx={{ display: "flex", justifyContent: "center", alignContent: "center" }}
//     >
//       <img src="spinner.svg" alt="loading..." />
//       {/* loading... */}
//     </Container>
//   );
// }
import * as React from "react";
import Stack from "@mui/material/Stack";
import CircularProgress from "@mui/material/CircularProgress";

export default function CircularColor() {
  return (
    <Stack
      sx={{
        color: "grey.500",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
      spacing={2}
      direction="row"
    >
      <CircularProgress color="secondary" />
    </Stack>
  );
}
