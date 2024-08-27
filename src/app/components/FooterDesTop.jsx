import React from "react";
import { Box, Grid, List } from "@mui/material";
import Image from "next/image";
import Stack from "@mui/material/Stack";
import Icon from "@mui/material/Icon";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import TelegramIcon from "@mui/icons-material/Telegram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Link from "next/link";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { FixedSizeList, ListChildComponentProps } from "react-window";
import { Margin } from "@mui/icons-material";

export default function FooterDesTop() {
  return (
    <>
      <Grid
        container
        fullWidth
        sx={{
          display: { md: "flex", xs: "none" },
          backgroundColor: "#968a89",
          justifyContent: "space-evenly",
          alignContent: "center",
          gap: "3rem",
          paddingBottom: "3rem",
        }}
      >
        <Grid
          item
          sx={{
            display: "flex",
            paddingTop: "3rem",
            justifyContent: "space-around",
            alignContent: "center",
            gap: "3rem",
          }}
        >
          <Image
            src="/imges/LOGO.png"
            alt="LOGO"
            width={80}
            height={80}
            style={{
              borderRadius: "10px",
              padding: "5px",
            }}
          />

          <Box
            direction="row"
            spacing={3}
            sx={{
              paddingTop: "20px",
              display: "flex",
              justifyContent: "center",
              alignContent: "center",
            }}
          >
            <Icon sx={{ marginLeft: "3px" }}>
              <Link href="/" style={{ color: "white" }}>
                {" "}
                <InstagramIcon />
              </Link>
            </Icon>
            <Icon sx={{ marginLeft: "3px" }}>
              <Link href="/" style={{ color: "white" }}>
                <TwitterIcon />
              </Link>
            </Icon>
            <Icon sx={{ marginLeft: "3px" }}>
              <Link href="/" style={{ color: "white" }}>
                {" "}
                <TelegramIcon />
              </Link>
            </Icon>
            <Icon sx={{ marginLeft: "3px" }}>
              <Link href="/" style={{ color: "white" }}>
                {" "}
                <LinkedInIcon />
              </Link>
            </Icon>
          </Box>

          <List>
            <ListItem>
              {" "}
              <Link
                href="/"
                style={{ textDecorationLine: "none", color: "white" }}
              >
                درباره‌ی ما{" "}
              </Link>
            </ListItem>
            <ListItem>
              {" "}
              <Link
                href="/"
                style={{ textDecorationLine: "none", color: "white" }}
              >
                {" "}
                تماس با ما{" "}
              </Link>{" "}
            </ListItem>
            <ListItem>
              <Link
                href="/"
                style={{ textDecorationLine: "none", color: "white" }}
              >
                پرسش‌های متداول{" "}
              </Link>
            </ListItem>
            <ListItem>
              {" "}
              <Link
                href="/"
                style={{ textDecorationLine: "none", color: "white" }}
              >
                موبایل اپلیکیشن
              </Link>
            </ListItem>
            <ListItem>
              {" "}
              <Link
                href="/"
                style={{ textDecorationLine: "none", color: "white" }}
              >
                شکایات ثبت{" "}
              </Link>
            </ListItem>
          </List>
          <List>
            <ListItem>
              {" "}
              <Link
                href="/"
                style={{ textDecorationLine: "none", color: "white" }}
              >
                وبلاگ
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="/"
                style={{ textDecorationLine: "none", color: "white" }}
              >
                {" "}
                قوانین سایت{" "}
              </Link>
            </ListItem>
            <ListItem>
              {" "}
              <Link
                href="/"
                style={{ textDecorationLine: "none", color: "white" }}
              >
                فرصت‌های شغلی
              </Link>{" "}
            </ListItem>
          </List>
          <Image
            height={65}
            width={65}
            src="/imges/senf.png"
            alt="SENF"
            sx={{ paddingTop: "50px" }}
          />
        </Grid>
      </Grid>
    </>
  );
}
