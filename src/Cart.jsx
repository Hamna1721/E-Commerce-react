import React, { useEffect, useState } from "react";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    const updated = savedCart.map(item => ({ ...item, quantity: item.quantity || 1 }));
    setCartItems(updated);
    updateTotal(updated);
  }, []);

  const updateTotal = (items) => {
    const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
    setTotalPrice(total);
  };

  const handleQuantity = (index, value) => {
    const updated = [...cartItems];
    updated[index].quantity = Number(value) || 1;
    setCartItems(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
    updateTotal(updated);
  };

  return (
    <div className="container mt-5 pt-5">
      <h2>Cart Items</h2>

      {cartItems.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        <>
          {cartItems.map((item, index) => (
            <div key={index} className="d-flex justify-content-between align-items-center border p-3 mb-3 rounded">
              <img src={item.thumbnail} alt={item.title} style={{ width: "80px", height: "80px", objectFit: "cover" }} />

              <div className="flex-grow-1 mx-3">
                <h5>{item.title}</h5>
                <p className="mb-1">{item.description}</p>
                <div>
                  Qty:
                  <input
                    type="number"
                    min="1"
                    value={item.quantity}
                    onChange={(e) => handleQuantity(index, e.target.value)}
                    className="form-control d-inline-block ms-2"
                    style={{ width: "70px" }}
                  />
                </div>
              </div>

              <div className="text-end">
                <p className="text-success fw-bold fs-5 mb-2">${(item.price * item.quantity).toFixed(2)}</p>
              </div>
            </div>
          ))}

          <div className="text-center mt-4">
            <h4>
              Total: <span className="fw-bold">${totalPrice.toFixed(2)}</span>
            </h4>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;

