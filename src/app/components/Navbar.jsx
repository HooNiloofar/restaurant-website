// "use client";

// import Link from "next/link";
// import { useSelector } from "react-redux";

// function Navbar() {
//   const { cartItems } = useSelector((state) => state.cart);

//   return (
//     <header>
//       <nav>
//         <div>
//           <span>({cartItems.reduce((acc, cur) => acc + cur.qty, 0)})</span>
//           <Link href="/cart">سبد خرید</Link>
//         </div>
//       </nav>
//     </header>
//   );
// }

"use client";

import Link from "next/link";
import { useSelector } from "react-redux";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Badge,
  Box,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

function Navbar() {
  const { cartItems } = useSelector((state) => state.cart);
  const cartItemCount = cartItems.reduce((acc, cur) => acc + cur.qty, 0);

  return (
    <AppBar position="static" sx={{ bgcolor: "#fc036f", borderRadius: "10PX" }}>
      <Toolbar>
        <Box display="flex" alignItems="center">
          <Badge badgeContent={cartItemCount} color="secondary">
            <ShoppingCartIcon />
          </Badge>
          <Link href="/cart" passHref>
            <IconButton
              color="inherit"
              component="a"
              sx={{ ml: 2, color: "white", textDecoration: "none" }}
            >
              سبد خرید
            </IconButton>
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;

// export default Navbar;
