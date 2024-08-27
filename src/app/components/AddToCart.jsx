// // "use client";
// // import { useState } from "react";
// // import { useDispatch, useSelector } from "react-redux";
// // import { addToCart } from "../redux/slices/cartSlice";
// // import { styled } from "@mui/material/styles";
// // import { Button } from "@mui/material";

// // export default function AddTooCard({ product }) {
// //   const AddBtn = styled(Button)(({ theme }) => ({
// //     display: "flex",
// //     alignItems: "center",
// //     backgroundColor: "#fc036f",
// //     width: "150px",
// //     padding: "2px 6px",
// //     borderRadius: "7px",
// //     color: "white",
// //     boxShadow: theme.shadows[1],
// //     marginLeft: theme.spacing(1),
// //     "&:hover": {
// //       backgroundColor: "#ff5c9a",
// //       color: "white",
// //     },
// //   }));

// //   const [qty, setQty] = useState(0);
// //   const dispatch = useDispatch();
// //   const { cartItems } = useSelector((state) => state.cart);
// //   function addToCartHandler() {
// //     let newQty = qty;
// //     console.log("cartItems", cartItems);
// //     const existingItem = cartItems.find((x) => x.id === product.id);

// //     if (existingItem) {
// //       if (existingItem.qty + 1 <= product.count) {
// //         newQty = existingItem.qty + 1;
// //       } else {
// //         return alert("این محصول وجود ندارد.");
// //       }
// //     }
// //     dispatch(addToCart({ ...product, qty: newQty }));
// //   }
// //   return (
// //     <>
// //       <div className="border border-slate-300 text-slate-300 rounded-lg px-3 py-2 mt-3 hover:bg-slate-800">
// //         <AddBtn onClick={addToCartHandler}> افزودن به سبد خرید</AddBtn>
// //       </div>
// //     </>
// //   );
// // }

// "use client";
// import { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { addToCart } from "../redux/slices/cartSlice";
// import { styled } from "@mui/material/styles";
// import { Button } from "@mui/material";

// export default function AddTooCard({ product }) {
//   const [qty, setQty] = useState(0);
//   const AddBtn = styled(Button)(({ theme }) => ({
//     width: "100%",
//     display: "flex",
//     alignItems: "center",
//     backgroundColor: "#fc036f",
//     width: "150px",
//     padding: "2px 6px",
//     borderRadius: "7px",
//     color: "white",
//     boxShadow: theme.shadows[1],
//     marginLeft: theme.spacing(1),
//     "&:hover": {
//       backgroundColor: "#ff5c9a",
//       color: "white",
//     },
//   }));

//   const dispatch = useDispatch();
//   const { cartItems } = useSelector((state) => state.cart);

//   const addToCartHandler = (e) => {
//     e.preventDefault();
//     let newQty = qty;
//     const existingItem = cartItems.find((x) => x.id === product.id);

//     if (existingItem) {
//       if (existingItem.qty + 1 <= product.count) {
//         newQty = existingItem.qty + 1;
//       } else {
//         return alert("این محصول وجود ندارد.");
//       }
//     }
//     dispatch(addToCart({ ...product, qty: newQty }));

//     // const addToCartHandler = (e) => {
//     //   e.preventDefault();
//     //   dispatch(addToCart({ ...product, qty: 1 }));
//   };

//   return <AddBtn onClick={addToCartHandler}> افزودن به سبد خرید</AddBtn>;
// }

// // "use client";
// // import { useDispatch } from "react-redux";
// // import { addToCart } from "../redux/slices/cartSlice";
// // import { styled } from "@mui/material/styles";
// // import { Button } from "@mui/material";

// // export default function AddTooCard({ product }) {
// //   const AddBtn = styled(Button)(({ theme }) => ({
// //     width: "100%",
// //     display: "flex",
// //     alignItems: "center",
// //     backgroundColor: "#fc036f",
// //     width: "150px",
// //     padding: "2px 6px",
// //     borderRadius: "7px",
// //     color: "white",
// //     boxShadow: theme.shadows[1],
// //     marginLeft: theme.spacing(1),
// //     "&:hover": {
// //       backgroundColor: "#ff5c9a",
// //       color: "white",
// //     },
// //   }));

// //   const dispatch = useDispatch();

// //   const addToCartHandler = () => {
// //     dispatch(addToCart({ ...product, qty: 1 }));
// //   };

// //   return <AddBtn onClick={addToCartHandler}> افزودن به سبد خرید</AddBtn>;
// // }

"use client";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/slices/cartSlice";
import { styled } from "@mui/material/styles";
import { Button } from "@mui/material";

export default function AddTooCard({ product }) {
  const AddBtn = styled(Button)(({ theme }) => ({
    width: "100%",
    display: "flex",
    alignItems: "center",
    backgroundColor: "#fc036f",
    width: "150px",
    padding: "2px 6px",
    borderRadius: "7px",
    color: "white",
    boxShadow: theme.shadows[1],
    marginLeft: theme.spacing(1),
    "&:hover": {
      backgroundColor: "#ff5c9a",
      color: "white",
    },
  }));

  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);

  const addToCartHandler = (e) => {
    e.preventDefault();
    const existingItem = cartItems.find((x) => x.id === product.id);
    let newQty = existingItem ? existingItem.qty + 1 : 1;

    if (newQty > product.count) {
      return alert("این محصول وجود ندارد.");
    }

    dispatch(addToCart({ ...product, qty: newQty }));
  };

  return <AddBtn onClick={addToCartHandler}>افزودن به سبد خرید </AddBtn>;
}
