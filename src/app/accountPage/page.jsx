"use client";
import React, { useState, useEffect } from "react";
import { Box, Typography, Button } from "@mui/material";
import { useRouter } from "next/navigation";

export default function AccountPage() {
  const [userData, setUserData] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const user = {
      name: "Niloofar Hooshangi",
      email: "hooshaniloofar@gmail.com",
      phone: "09138019734",
      birthDate: "1370/09/20",
    };
    setUserData(user);
  }, []);

  const handleLogout = () => {
    router.push("/login");
  };

  if (!userData) {
    return <div>Loading...</div>;
  }

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100vh"
    >
      <Typography variant="h4">حساب من</Typography>
      <Typography variant="body1">نام: {userData.name}</Typography>
      <Typography variant="body1">ایمیل: {userData.email}</Typography>
      <Typography variant="body1">شماره‌ تلفن: {userData.phone}</Typography>
      <Typography variant="body1"> تاریخ تولد: {userData.birthDate}</Typography>

      <Button
        variant="outlined"
        color="secondary"
        onClick={handleLogout}
        sx={{
          marginTop: "1rem",
          backgroundColor: "#fc036f !important",
          color: "white",
        }}
      >
        خروج از حساب
      </Button>
    </Box>
  );
}
