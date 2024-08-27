import React from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import Image from "next/image";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../redux/slices/cartSlice";
import { styled } from "@mui/material/styles";
import AddTooCard from "./AddToCart"; // Import the AddTooCard component
import Link from "next/link";

const ProductImage = styled("div")({
  width: 120,
  height: 120,
  borderRadius: 10,
  overflow: "hidden",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  margin: "auto",
});

const TitleTag = styled(Typography)(({ theme }) => ({
  color: "red",
  fontSize: "0.875rem",
  fontWeight: "bold",
}));

const Price = styled(Typography)(({ theme }) => ({
  textDecoration: "line-through",
  color: "black",
}));

const DiscountedPrice = styled(Typography)(({ theme }) => ({
  color: "green",
  fontWeight: "bold",
}));

const LikeBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  backgroundColor: "lightgray",
  padding: "2px 4px",
  borderRadius: "7px",
  boxShadow: theme.shadows[1],
  marginLeft: theme.spacing(1),
}));

const DiscountBox = styled(Box)(({ theme }) => ({
  textAlign: "center",
  backgroundColor: "#fc036f",
  color: "white",
  padding: "2px 4px",
  borderRadius: "5px",
  boxShadow: theme.shadows[1],
  marginLeft: theme.spacing(1),
  fontWeight: "500",
  fontSize: "0.875rem",
}));

export default function FoodCart({ product, key }) {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const item = cartItems.find((item) => item.id === product.id);
  const count = item ? item.qty : 0;

  const handleIncrement = (e) => {
    e.preventDefault();
    dispatch(increment(product.id));
  };

  const handleDecrement = (e) => {
    e.preventDefault();
    if (count > 0) {
      dispatch(decrement(product.id));
    }
  };

  const hasDiscount = product && product.discount && product.discount > 0;

  const separate3Digits = (num) => {
    if (num === 0) return 0;
    if (!num) return;
    let str = typeof num === "number" ? num.toString() : num;
    str = str?.split(".");
    if (str[0]) {
      str[0] = str[0].replace(/(\d)(?=(\d{3})+$)/g, "$1,");
    }
    if (str[1]) {
      str[1] = str[1].replace(/(\d{3})/g, "$1 ");
    }
    return str?.join(".");
  };

  return (
    <Card
      sx={{
        width: "100%",
        borderRadius: 10,
        boxShadow: 1,
        overflow: "hidden",
        margin: "auto",
      }}
      key={key}
    >
      <Link
        href={`foodMenu/${product?.id}`}
        passHref
        style={{ textDecoration: "none" }}
      >
        <Grid
          container
          spacing={2}
          sx={{
            padding: "12px",
            alignItems: "center",
            justifyContent: "center",
            boxSizing: "border-box",
          }}
        >
          <Grid item xs={12} sm={4} md={3} lg={2}>
            <ProductImage>
              <Image
                width={120}
                height={120}
                alt="image"
                src={product?.img || "/placeholder.png"}
                layout="responsive"
              />
            </ProductImage>
          </Grid>
          <Grid item xs={12} sm={8} md={9} lg={10}>
            <CardContent sx={{ padding: "12px" }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <TitleTag>{product?.name || "نام محصول نامشخص"}</TitleTag>
                <LikeBox>
                  <StarBorderIcon fontSize="small" />
                  {product?.rate || 0}
                </LikeBox>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginTop: 2,
                }}
              >
                {hasDiscount ? (
                  <>
                    <Typography>
                      قیمت: <Price>{separate3Digits(product.price)}</Price>
                    </Typography>
                    <DiscountBox>{product.discount}%</DiscountBox>
                    <DiscountedPrice>
                      {separate3Digits(
                        product.price - (product.price * product.discount) / 100
                      )}
                    </DiscountedPrice>
                  </>
                ) : (
                  <Typography>
                    قیمت: {separate3Digits(product.price)}
                  </Typography>
                )}
              </Box>
              <Box sx={{ marginTop: "1rem" }}>
                {count === 0 ? (
                  <Box sx={{ width: "100%" }}>
                    <AddTooCard product={product} />
                  </Box>
                ) : (
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Button onClick={handleDecrement} size="small">
                      <RemoveIcon />
                    </Button>
                    <Typography sx={{ marginX: 2 }}>{count}</Typography>
                    <Button onClick={handleIncrement} size="small">
                      <AddIcon />
                    </Button>
                  </Box>
                )}
              </Box>
            </CardContent>
          </Grid>
        </Grid>
      </Link>
    </Card>
  );
}
