// import React from "react";
// "use client";

// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
// import { Box, Button, Container, TextField, Grid, Item ,CssBaseline} from "@mui/material";
// import LoginIcon from "@mui/icons-material/Login";
// import Link from "next/link";

// export default function testi() {
//   return (
//     <div>
//       <Grid
//         item
//         sx={{
//           display: "flex",
//           justifyContent: "space-between",
//           // paddingLeft: 5,
//           // paddingRight: 5,
//           // maxWidth:1152,
//           // marginRight:"auto",
//           // marginLeft:"auto" ,
//           // marginTop:3,
//           width: "100vw !important",
//           marginTop: "3px",
//         }}
//       >
//         {" "}
//         <form
//           // className="flex justify-between px-5 max-w-6xl mx-auto"
//           onSubmit={handleSubmit}
//           style={{
//             display: "flex",
//             justifyContent: "start",
//             width: "100vw !important",
//             background: "#F5EFEC",
//             // margin: 1,
//             padding: 3,
//             borderRaduce: "5px !important",
//           }}
//         >
//           <TextField
//             type="search"
//             variant="standard"
//             placeholder="جستجوی سریع"
//             onChange={(e) => setSearch(e.target.value)}
//             sx={{
//               outline: "none",
//               width: "100%",
//               border: "none !important ",
//             }}
//           />
//           <Link href="/search">
//             <SearchOutlinedIcon
//               className=" disabled:text-gray-400"
//               disabled={search === ""}
//               sx={{ color: "black !important" }}
//             >
//               Search
//             </SearchOutlinedIcon>
//           </Link>
//         </form>{" "}
//         <Link href="/login" style={{ color: "black", fontWeight: "bolder" }}>
//           <LoginIcon> </LoginIcon>ورود
//         </Link>
//       </Grid>
//     </div>
//   );
// }

"use client";
import React, { useCallback, useMemo, useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import Color from "color";
import { Star1 } from "iconsax-react";
import {
  Card,
  Box,
  Typography,
  useTheme,
  styled,
  Divider,
} from "@mui/material";
import { separate3Digits } from "@/utils/common";

// item:
//   image     image address url
//   title     product name
//   rate      product rate point
//   price     product price
//   week      a 7 length array of boolean values (optional)

const ContentContainer = styled("div")(({ theme }) => ({
  paddingRight: theme.spacing(2.5),
  paddingLeft: theme.spacing(2.5),
}));

export default function ProductCard({ item }) {
  const [hover, setHover] = useState(false);
  const handleMouseOver = useCallback(() => setHover(true), []);
  const handleMouseOut = useCallback(() => setHover(false), []);
  return (
    <Card
      sx={{ boxShadow: hover ? 6 : 2 }}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <ProductImage item={item} hover={hover} />
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <ProductContent item={item} />
        <ProductPrice item={item} />
        {item.week && (
          <>
            <Divider />
            <ProductWeek item={item} />
          </>
        )}
      </Box>
    </Card>
  );
}

function ProductImage({ item, hover }) {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: 180,
        overflow: "hidden",
      }}
    >
      <Image
        alt={item.title}
        src={item.image}
        width={400}
        height={400}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          margin: "auto",
          transition: "200ms ease-out",
          transform: hover ? "scale(1.05) rotate(3deg)" : undefined,
        }}
      />
    </Box>
  );
}

function ProductContent({ item }) {
  const theme = useTheme();
  return (
    <ContentContainer
      sx={{
        display: "flex",
        justifyContent: "space-between",
        paddingY: 1.5,
      }}
    >
      <Typography fontSize={16} fontWeight={500}>
        {item.title}
      </Typography>
      <Box
        sx={{
          display: "flex",
          gap: 0.5,
          backgroundColor: Color(theme.palette.text.primary)
            .alpha(0.125)
            .hexa(),
          alignItems: "center",
          paddingX: 0.5,
          borderRadius: 0.5,
        }}
      >
        <Typography
          fontSize={12}
          fontWeight={400}
          color={theme.palette.text.primary}
        >
          {item.rate}
        </Typography>
        <Star1 size={14} color={theme.palette.text.primary} />
      </Box>
    </ContentContainer>
  );
}

function ProductPrice({ item }) {
  const t = useTranslations("ProductCard");
  return (
    <ContentContainer
      sx={{ mt: 5, py: 1.5, display: "flex", gap: 0.5, alignItems: "center" }}
    >
      <Typography fontSize={16} fontWeight={500}>
        {separate3Digits(item.price)}
      </Typography>
      <Typography fontSize={12} fontWeight={400}>
        {t("currency")}
      </Typography>
    </ContentContainer>
  );
}

function ProductWeek({ item }) {
  const t = useTranslations("ProductCard");
  return (
    <ContentContainer
      sx={{
        mt: 1,
        paddingBottom: 2,
        display: "flex",
        flexDirection: "column",
        gap: 1.5,
      }}
    >
      <Typography fontSize={14} fontWeight={400}>
        {t("existDays")}
      </Typography>
      <Box sx={{ display: "flex", gap: 2 }}>
        {new Array(7).fill(null).map((_, i) => (
          <ProductWeekDay dayIndex={i} active={item.week[i]} />
        ))}
      </Box>
    </ContentContainer>
  );
}

function ProductWeekDay({ dayIndex, active }) {
  const t = useTranslations("Calender");
  const theme = useTheme();

  const day = useMemo(() => {
    const date = new Date();
    const offset = 1;
    let day = date.getDay() + offset;
    day = day > 6 ? day - 7 : day;
    return day;
  }, []);

  return (
    <Card
      sx={{
        width: "100%",
        aspectRatio: "1/1",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        boxShadow: active ? 1 : 0,
        backgroundColor: active
          ? theme.palette.background.default
          : Color(theme.palette.text.primary).alpha(0.125).hexa(),
      }}
    >
      <Typography
        fontSize={16}
        fontWeight={500}
        color={
          day === dayIndex
            ? theme.palette.primary.main
            : active
            ? theme.palette.text.primary
            : theme.palette.text.disabled
        }
      >
        {t(`daysLetter.${dayIndex}`)}
      </Typography>
    </Card>
  );
}
