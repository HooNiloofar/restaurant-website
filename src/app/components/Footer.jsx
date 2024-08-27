// "use client";
// import * as React from "react";
// import Box from "@mui/material/Box";
// import BottomNavigation from "@mui/material/BottomNavigation";
// import BottomNavigationAction from "@mui/material/BottomNavigationAction";
// import LocationOnIcon from "@mui/icons-material/LocationOn";
// import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
// import LocalOfferOutlinedIcon from "@mui/icons-material/LocalOfferOutlined";
// import { Container } from "@mui/material";
// import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
// import { useRouter } from "next/navigation";

// export default function Footer() {
//   const [value, setValue] = React.useState(0);
//   const router = useRouter();

//   return (
//     <Container sx={{ display: { md: "none", sm: "flex" } }}>
//       <Box fullWidth sx={{ width: "100%" }}>
//         <BottomNavigation
//           sx={{
//             position: "fixed",
//             left: 0,
//             bottom: 0,
//             zIndex: 10000,
//             width: "100%",
//           }}
//           showLabels
//           value={value}
//           onChange={(event, newValue) => {
//             setValue(newValue);
//           }}
//         >
//           <BottomNavigationAction label="خانه" icon={<HomeOutlinedIcon /> } />

//           <BottomNavigationAction
//             label="تخفیف ها"
//             icon={<LocalOfferOutlinedIcon />}
//           />

//           <BottomNavigationAction label="حساب من" icon={<LocationOnIcon />} />
//           <BottomNavigationAction
//             label=" درباره‌ی ما"
//             icon={<InfoOutlinedIcon />}
//           />
//         </BottomNavigation>
//       </Box>
//     </Container>
//   );
// }

"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import LocalOfferOutlinedIcon from "@mui/icons-material/LocalOfferOutlined";
import { Container } from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { useRouter } from "next/navigation";

export default function Footer() {
  const [value, setValue] = React.useState(0);
  const router = useRouter();

  const handleNavigation = (newValue) => {
    setValue(newValue);
    switch (newValue) {
      case 0:
        router.push("/"); // Navigate to home page
        break;
      case 1:
        router.push(`/searchPage?discount=${true}`); // Navigate to discounts page
        break;
      case 2:
        router.push("/accountPage"); // Navigate to account page
        break;
      case 3:
        router.push("/aboutUs"); // Navigate to about us page
        break;
      default:
        break;
    }
  };

  return (
    <Container sx={{ display: { md: "none", sm: "flex" } }}>
      <Box fullWidth sx={{ width: "100%" }}>
        <BottomNavigation
          sx={{
            position: "fixed",
            left: 0,
            bottom: 0,
            zIndex: 10000,
            width: "100%",
          }}
          showLabels
          value={value}
          onChange={(event, newValue) => {
            handleNavigation(newValue);
          }}
        >
          <BottomNavigationAction label="خانه" icon={<HomeOutlinedIcon />} />
          <BottomNavigationAction
            label="تخفیف ها"
            icon={<LocalOfferOutlinedIcon />}
          />
          <BottomNavigationAction
            label=" حساب من  "
            icon={<LocationOnIcon />}
          />
          <BottomNavigationAction
            label=" درباره‌ی ما"
            icon={<InfoOutlinedIcon />}
          />
        </BottomNavigation>
      </Box>
    </Container>
  );
}
