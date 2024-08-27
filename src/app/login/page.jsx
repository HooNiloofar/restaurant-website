"use client";
import React, { useState, useEffect } from "react";
import PhoneNumberInput from "../components/PhoneNumberInput";
import OtpCode from "../components/OtpCode";
import Response from "../components/Response";
import { Box } from "@mui/material";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function LoginPage() {
  const [pageLevel, setPageLevel] = useState({ level: 0, token: "" });
  const router = useRouter();

  // useEffect(() => {
  //   let timeout;
  //   if (pageLevel?.level === 2) {
  //     timeout = setTimeout(() => {
  //       setPageLevel({ level: 0, token: "" });
  //       router.push("/");
  //     }, 5000);
  //   }
  //   return () => clearTimeout(timeout);
  // }, [pageLevel]);

  // const handleOtpSuccess = () => {
  //   setPageLevel({ level: 0, token: "" });
  //   router.push("/");
  // };

  return (
    <Box>
      {pageLevel?.level === 0 && (
        <PhoneNumberInput pageLevel={pageLevel} setPageLevel={setPageLevel} />
      )}
      {pageLevel?.level === 1 && (
        <OtpCode
          pageLevel={pageLevel}
          setPageLevel={setPageLevel}
          // onSuccess={handleOtpSuccess}
        />
      )}
      {pageLevel?.level === 2 && (
        <Response pageLevel={pageLevel} setPageLevel={setPageLevel} />
      )}
      <Box>
        {" "}
        <Link
          href="/"
          style={{
            fontSize: "0.875rem",
            fontWeight: "550",
            textDecoration: "none",
            // width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#fc036f",
            width: "90px",
            padding: "0.5rem 1rem",
            borderRadius: "10px",
            color: "white",
            margin: "1rem",
            "&:hover": {
              backgroundColor: "#ff5c9a",
              color: "white",
            },
          }}
        >
          بازگشت به صفحه‌ی اصلی
        </Link>
      </Box>
    </Box>
  );
}
