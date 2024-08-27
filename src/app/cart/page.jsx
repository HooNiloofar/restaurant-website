"use client";

import {
  Box,
  Container,
  Typography,
  Paper,
  TableContainer,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Button,
  useMediaQuery,
} from "@mui/material";
import { useRouter } from "next/navigation";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../redux/slices/cartSlice";

export default function CartPage() {
  const dispatch = useDispatch();
  const router = useRouter();
  const { cartItems, totalPrice } = useSelector((state) => state.cart);

  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleRedirectToHome = () => {
    router.push("/");
  };

  return (
    <Container>
      <Typography variant="h4" align="center" gutterBottom>
        سبد خرید
      </Typography>
      {cartItems.length === 0 ? (
        <Box display="flex" justifyContent="center" mt={4}>
          <Button
            variant="contained"
            sx={{
              bgcolor: "#fc036f",
              "&:hover": {
                bgcolor: "#e50359",
              },
              "&:active": {
                bgcolor: "#c4024d",
              },
            }}
            onClick={handleRedirectToHome}
          >
            بازگشت به صفحه اصلی
          </Button>
        </Box>
      ) : (
        <>
          <Box
            display="flex"
            flexDirection={isSmallScreen ? "column" : "row"}
            justifyContent="center"
            alignItems="center"
          >
            <Box my={2} mx={3} flex="1 1 auto">
              <Paper
                elevation={3}
                sx={{ p: 2, bgcolor: "#fc036f", color: "white" }}
              >
                <Typography variant="h6">
                  مجموع قیمت: {totalPrice} تومان
                </Typography>
              </Paper>
            </Box>
            <Box flex="2 1 auto" maxWidth="100%">
              <TableContainer component={Paper}>
                <Table>
                  <TableBody>
                    {cartItems.map((item) => (
                      <TableRow key={item.id}>
                        <TableCell
                          sx={{
                            fontSize: isSmallScreen ? "0.75rem" : "0.875rem",
                            fontWeight: "bold",
                          }}
                        >
                          {item.name}
                        </TableCell>
                        <TableCell
                          sx={{
                            fontSize: isSmallScreen ? "0.75rem" : "0.875rem",
                            fontWeight: "bold",
                          }}
                        >
                          {item.qty} عدد
                        </TableCell>
                        <TableCell
                          align="right"
                          sx={{
                            fontSize: isSmallScreen ? "0.75rem" : "0.875rem",
                            fontWeight: "bold",
                          }}
                        >
                          {item.price} تومان
                        </TableCell>
                        <TableCell align="center">
                          <Button
                            variant="contained"
                            color="secondary"
                            size={isSmallScreen ? "small" : "medium"}
                            onClick={() => removeFromCartHandler(item.id)}
                          >
                            حذف از سبد کالا
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Box>
          </Box>
        </>
      )}
    </Container>
  );
}
