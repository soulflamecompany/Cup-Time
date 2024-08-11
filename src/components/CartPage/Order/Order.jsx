import { useOrder } from "../../../hooks/useOrder";

const Order = () => {
  const { orderDetails, updateOrderDetails } = useOrder();
  const handleChange = (evt) => {
    const { name, value } = evt.target;
    updateOrderDetails(name, value);
  };
  return (
    <>
      <section className="order">
        <div className="container">
          <h2 className="order__title">Доставка</h2>
          <form className="order__form">
            <input
              type="text"
              className="order__input"
              name="name"
              placeholder="Имя"
              value={orderDetails.name}
              onChange={handleChange}
            />
            <input
              type="text"
              className="order__input"
              name="phone"
              placeholder="Телефон"
              value={orderDetails.phone}
              onChange={handleChange}
            />
            <input
              type="text"
              className="order__input order__input-address"
              name="address"
              placeholder="Адрес"
              value={orderDetails.address}
              onChange={handleChange}
            />
            <fieldset className="order__payment">
              <h3 className="order__payment-title">Оплата:</h3>
              <label className="order__payment-label">
                <input
                  type="radio"
                  name="payment"
                  className="order__radio"
                  value="card"
                  checked={orderDetails.payment === "card"}
                  onChange={handleChange}
                />
                Картой
              </label>
              <label className="order__payment-label">
                <input
                  type="radio"
                  name="payment"
                  className="order__radio"
                  value="cash"
                  checked={orderDetails.payment === "cash"}
                  onChange={handleChange}
                />
                Наличные
              </label>
            </fieldset>
          </form>
        </div>
      </section>
    </>
  );
};

export default Order;
