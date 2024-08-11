import { useContext } from "react";
import { OrderContext } from "./Context/OrderContext";

export const useOrder = () => useContext(OrderContext);
