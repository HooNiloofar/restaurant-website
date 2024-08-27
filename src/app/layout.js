// import { ThemeProvider } from "@mui/material/styles";
// import StoreProvider from "./redux/storeProvider";
// import theme from "../theme";

// function MyApp({ children }) {
//   return (
//     <html lang="fa" dir="rtl">
//       <body>
//         <ThemeProvider theme={theme}>
//           <StoreProvider>{children}</StoreProvider>
//         </ThemeProvider>
//       </body>
//     </html>
//   );
// }

// export default MyApp;

// import { ThemeProvider } from "@mui/material/styles";
// import StoreProvider from "./redux/storeProvider";
// import theme from "../theme";

// function MyApp({ children }) {
//   return (
//     <html lang="fa" dir="rtl">
//       <body>
//         <ThemeProvider theme={theme}>
//           <StoreProvider>{children}</StoreProvider>
//         </ThemeProvider>
//       </body>
//     </html>
//   );
// }

// export default MyApp;

import { ThemeProvider } from "@mui/material/styles";
import theme from "../theme"; // Adjust the path as necessary
import SliceProvider from "./redux/SliceProvider";

function MyApp({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body>
        <ThemeProvider theme={theme}>
          <SliceProvider>{children}</SliceProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

export default MyApp;
