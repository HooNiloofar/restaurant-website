"use client";

import { store } from "./store";
import { Provider } from "react-redux";

export default function SliceProvider({ children }) {
  return <Provider store={store}>{children}</Provider>;
}
