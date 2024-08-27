"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import {
  Box,
  Button,
  Container,
  InputBase,
  Grid,
  CssBaseline,
  Typography,
} from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
import Link from "next/link";

export default function SearchBox({ params }) {
  const [search, setSearch] = useState("");
  const router = useRouter();
  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(`/searchPage?query=${search}`);
  };
  return (
    <>
      <CssBaseline />
      <Container sx={{ paddingTop: "2rem" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Grid
            container
            xs={6}
            md={8}
            sx={{ display: "flex", alignItems: "center" }}
          >
            <Grid item>
              <form
                onSubmit={handleSubmit}
                style={{
                  display: "flex",
                  alignItems: "center",
                  width: "100%",
                  background: "#F5EFEC",
                  padding: "3px 10px",
                  borderRadius: "5px",
                }}
              >
                <InputBase
                  type="search"
                  placeholder="جستجو"
                  onChange={(e) => setSearch(e.target.value)}
                  sx={{
                    width: "100%",
                    borderRadius: "10px",
                    backgroundColor: "#F5EFEC",
                    padding: "5px 10px",
                  }}
                  inputProps={{
                    style: {
                      border: "none",
                      outline: "none",
                    },
                  }}
                />
                <Link href={`/searchPage?query=${search}`}>
                  <Button
                    disabled={search === ""}
                    sx={{ marginLeft: 1, color: "black" }}
                  >
                    <SearchOutlinedIcon />
                  </Button>
                </Link>
              </form>
            </Grid>
          </Grid>
          <Grid
            container
            xs={1}
            md={2}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Grid item>
              <Link
                href="/login"
                style={{
                  color: "black",
                  fontWeight: "400",
                  textDecoration: "none",
                }}
              >
                <Typography
                  variant="h6"
                  sx={{ display: "flex", alignItems: "center" }}
                >
                  <LoginIcon />
                  ورود
                </Typography>
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
}
