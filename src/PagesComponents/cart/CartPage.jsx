import React, { useState, useEffect } from "react";
import MainWrapper from "../../globals/MainWrapper";
import { Button } from "@mui/material";
import styles from "../../styles/login.module.css";
import { Link } from "react-router-dom";

const CartPage = ({ cartItems, removeFromCart }) => {
  const [cartItemsData, setCartItems] = useState(cartItems);
  const [totalPrice, setTotalAmount] = useState(20);

  // Update cartItemsData state whenever the cartItems prop value changes
  useEffect(() => {
    setCartItems(cartItems);
  }, [cartItems]);

  const updateCartItemQuantity = (productId, newQuantity) => {
    const newCartItems = [...cartItemsData];
    const cartItemIndex = newCartItems.findIndex(
      (item) => item.id === productId
    );
    if (cartItemIndex !== -1) {
      newCartItems[cartItemIndex].quantity = newQuantity;
      setCartItems(newCartItems);
    }
  };

  return (
    <MainWrapper>
      <div className="container py-4 align-self-center w-75 align-content-center d-flex flex-column">
        <h5 className="text-muted text-success fw-semibold text-center fs-4 text-uppercase mb-4">
          Your Cart
        </h5>
        {cartItemsData.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ul className="list-group mb-4">
            {cartItemsData.map((item) => (
              <li
                className="list-group-item d-flex justify-content-between align-items-center"
                key={item.id}
              >
                <div>
                  <span className="fw-bold">{item.name}</span> - R{item.price} (
                  {item.quantity})
                </div>
                <div className="d-flex">
                  <Button
                    variant="contained"
                    className={`${styles.btn} me-3 text-secondary`}
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove
                  </Button>
                  <input
                    type="number"
                    value={item.quantity}
                    onChange={(e) =>
                      updateCartItemQuantity(
                        item.id,
                        parseInt(e.target.value)
                      )
                    }
                    min="1"
                    className="form-control me-3"
                  />
                  <span className="badge bg-success rounded-pill">{`R${
                    item.price * item.quantity
                  }`}</span>
                </div>
              </li>
            ))}
          </ul>
        )}
        <div className="d-flex justify-content-end">
          <Button
            variant="contained"
            className={`${styles.btn} text-secondary`}
          >
            Continue Shopping
          </Button>
        </div>
        <div className="d-flex">
            <Button
              variant="contained"
              className={`${styles.btn} text-secondary`}
            >
              <Link to="/checkout">Checkout</Link>
            </Button>
            <div className="ms-3">Total: R{totalPrice.toFixed(2)}</div>
          </div>
      </div>
    </MainWrapper>
  );
};

export default CartPage;
