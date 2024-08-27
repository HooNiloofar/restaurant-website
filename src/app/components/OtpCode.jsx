"use client";
import {
  Box,
  Container,
  Grid,
  Typography,
  Button,
  TextField,
  Stack,
} from "@mui/material";
import React, { useState } from "react";

const OTP_LENGTH = 4;

export default function Otpcode({ pageLevel, setPageLevel }) {
  const [otp, setOtp] = useState(new Array(OTP_LENGTH).fill(""));
  const [message, setMessage] = useState("");
  // const [currentOtpIndex, setCurrentOtpIndex] = useState();

  const handeleOtpChange = (element, index) => {
    if (isNaN(element.value)) return false;

    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);
    console.log(element.value);
    console.log(otp);
    //focus next input
    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  };

  // focuce on previoussibling
  // const handleKeyDown = (event) => {

  //   if (event.key === "Backspace" && event.target.previousSibling) {
  //     event.preventDefault();
  //     event.target.previousSibling.value = "";
  //     event.target.value = "";
  //     event.target.previousSibling.focus();
  //   }
  // };
  const handleKeyDown = (event, index) => {
    if (event.key === "Backspace") {
      event.preventDefault();
      setOtp((prev) => {
        const newOtp = [...prev];
        newOtp[index] = "";
        return newOtp;
      });
      // Focus previous input
      if (event.target.previousSibling) {
        event.target.previousSibling.focus();
      }
    }
  };

  async function GetOtpNumber() {
    const res = await fetch("/api/otpCode", {
      body: JSON.stringify({ otp: otp.join("") }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });
    const result = await res.json();
    if (result.success) {
      setPageLevel({ ...pageLevel, level: 2 });
    } else {
      setMessage(result.message);
    }
  }

  return (
    <>
      <Box>
        <Grid
          container
          sm={12}
          gap={5}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          <Grid item>
            <label>
              <Typography
                sx={{
                  fontSize: "0.875rem",
                  fontWeight: "600",
                  paddingTop: "5rem",
                }}
              >
                لطفا کد OTP خود را وارد کنید.
              </Typography>
            </label>
          </Grid>
        </Grid>
        <Grid
          container
          sm={12}
          gap={5}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
            direction: "ltr",
            paddingBottom: "5px",
          }}
        >
          <Grid item>
            {otp.map((data, index) => {
              return (
                <input
                  style={{
                    width: "2.5rem",
                    borderRadius: "5px",
                    textAlign: "center",
                    width: "40px",
                    height: "40px",
                    outline: "none",
                    border: "1px solid black",
                    background: "rgb(249 250 251)",
                    margin: "5px",
                  }}
                  type="tel"
                  name="otp"
                  maxLength={1}
                  key={index}
                  value={data}
                  onChange={(e) => handeleOtpChange(e.target, index)}
                  onFocus={(e) => e.target.select()}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                />
              );
            })}
            <Typography
              align="center"
              sx={{
                fontSize: "0.875rem",
                fontWeight: "550",
                paddingTop: "5px",
              }}
            >
              {otp.join("")} :کد وارد شده
            </Typography>
          </Grid>
        </Grid>
        <Grid
          container
          sm={12}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          <Grid item>
            <Button
              variant="contained"
              sx={{
                padding: "3px",
                marginRight: "5px",
                // backgroundColor: "rgb(153 27 27)!important",
                backgroundColor: "#fc036f !important",
                fontWeight: "bold",
                fontSize: "0.875rem",
              }}
              onClick={(e) => GetOtpNumber()}
            >
              ارسال
            </Button>
            <Button
              variant="contained"
              sx={{
                padding: "3px",
                marginRight: "5px",
                // backgroundColor: "rgb(153 27 27)!important",
                backgroundColor: "#fc036f !important",
                fontWeight: "bold",
                fontSize: "0.875rem",
              }}
              onClick={(e) => setOtp([...otp.map((v) => "")])}
            >
              پاک کردن
            </Button>
          </Grid>
        </Grid>
        <Grid
          container
          sx={{
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
            paddingTop: "1.5rem",
          }}
        >
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
    </>
  );
}
