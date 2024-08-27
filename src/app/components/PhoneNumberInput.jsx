"use client";
import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import { Box, Typography, TextField, Button } from "@mui/material";
import { Token } from "@mui/icons-material";

export default function PhoneNumberInput({ pageLevel, setPageLevel }) {
  const [phoneNumber, setPhoneNumber] = useState();
  const [message, setMessage] = useState("");
  async function GetPhoneNumber() {
    const res = await fetch("/api/phoneNumber", {
      body: JSON.stringify({ phoneNumber: phoneNumber }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });
    const result = await res.json();
    if (result.success) {
      setPageLevel({ ...pageLevel, level: 1 });
    } else {
      setMessage(result.message);
    }
  }
  return (
    <div>
      <Box>
        <Grid
          container
          spacing={2}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            paddingTop: "5rem",
            flexDirection: "column",
          }}
        >
          <Grid item>
            <label>
              <Typography> لطفا شماره موبایل خود را وارد کنید. </Typography>
            </label>
            <TextField
              sx={{
                maxLength: "11",
                pattern: "09(1[0-9]|3[1-9]|2[1-9])-?[0-9]{3}-?[0-9]{4}",
                textAlign: "center",
              }}
              variant="standard"
              size="small"
              margin="normal"
              onChange={(e) => setPhoneNumber(e.target.value)}
              label="مثلا 09131111213"
              align="right"
              color="error"
            />
          </Grid>
          <Grid item>
            <Button
              variant="text"
              sx={{
                padding: "3px",
                color: "white",
                marginRight: "5px",
                // backgroundColor: "rgb(153 27 27)!important",
                backgroundColor: "#fc036f !important",
                fontWeight: "bold",
                fontSize: "0.875rem",
              }}
              onClick={GetPhoneNumber}
            >
              ارسال
            </Button>
          </Grid>
          <Grid item>
            <span>
              <Typography
                variant="h6"
                sx={{
                  color: "black",
                  fontSize: "",
                  Padding: "2px",
                  fontSize: "0.875rem",
                  fontWeight: "bold",
                }}
              >
                {message}
              </Typography>
            </span>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
