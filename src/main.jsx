import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "normalize.css";
import "./index.css";
import { ProductProvider } from "./hooks/Context/ProductContext.jsx";
import { CartProvider } from "./hooks/Context/CartContext.jsx";
import { OrderProvider } from "./hooks/Context/OrderContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ProductProvider>
      <CartProvider>
        <OrderProvider>
          <App />
        </OrderProvider>
      </CartProvider>
    </ProductProvider>
  </React.StrictMode>
);
