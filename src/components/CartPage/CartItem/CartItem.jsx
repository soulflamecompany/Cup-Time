import { useState } from "react";
import { useCart } from "../../../hooks/useCart";
import { API_URL } from "../../../utils/const";

const CartItem = ({ data }) => {
  const [itemQuantity, setItemQuantity] = useState(data.quantity);
  const { updateQuantity, removeFromCart } = useCart();

  const handleDecrease = () => {
    const newQuantity = itemQuantity - 1;
    if (newQuantity > 0) {
      setItemQuantity(newQuantity);
      updateQuantity(data.id, newQuantity);
    } else {
      removeFromCart(data.id);
    }
  };
  const handleIncrease = () => {
    const newQuantity = itemQuantity + 1;
    setItemQuantity(newQuantity);
    updateQuantity(data.id, newQuantity);
  };

  return (
    <li className="cart__item">
      <img
        src={`${API_URL}${data.img}`}
        alt={data.title}
        className="cart-item__image"
      />
      <div className="cart-item__info">
        <h3 className="cart-item__title">{data.title}</h3>
        <div className="cart-item__quantity">
          <button
            className="cart-item__quantity-button cart-item__quantity-button-minus"
            onClick={handleDecrease}
          ></button>
          <input
            type="number"
            className="cart-item__quantity-input"
            value={data.quantity}
            readOnly
          />
          <button
            className="cart-item__quantity-button cart-item__quantity-button-plus"
            onClick={handleIncrease}
          ></button>
        </div>

        <p className="cart-item__price">{data.price * data.quantity}&nbsp;₽</p>
      </div>
    </li>
  );
};

export default CartItem;
