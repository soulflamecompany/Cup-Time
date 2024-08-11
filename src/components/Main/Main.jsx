import { Navigate, Route, Routes } from "react-router-dom";
import Hero from "../Hero/Hero";
import Products from "../Products/Products";
import Cart from "../CartPage/Cart/Cart";
import Order from "../CartPage/Order/Order";

const Main = () => {
  return (
    <main className="main">
      <Routes>
        <Route path="/" element={<Navigate to="/products?category=tea" />} />
        <Route
          path="/products"
          element={
            <>
              <Hero />
              <Products />
            </>
          }
        />
        <Route
          path="/cart"
          element={
            <>
              <Cart />
              <Order />
            </>
          }
        />
      </Routes>
    </main>
  );
};

export default Main;
