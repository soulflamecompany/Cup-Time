import { useContext } from "react";
import { ProductContext } from "./Context/ProductContext";

export const useProducts = () => useContext(ProductContext);
