import { Container } from "@mui/material";
import React from "react";
import Image from "next/image";

export default function Img() {
  return (
    <Container sx={{}}>
      <Image
        src={"/imges/0d9e39a0-9487-4a21-9efe-1f5843739925.png"}
        alt="foods"
        width="1100"
        height="300"
      />
    </Container>
  );
}
