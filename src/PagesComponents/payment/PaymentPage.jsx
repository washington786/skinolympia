import React, { useState } from "react";
import MainWrapper from "../../globals/MainWrapper";
import { Button } from "@mui/material";
import styles from "../../styles/login.module.css";
import "./styles.css";

const PaymentPage = ({ cartItems }) => {
  const totalAmount = cartItems
    ? cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)
    : 0;

  console.log(process.env.REACT_APP_MERCHANT_URL);
  const merchant_api = process.env.REACT_APP_MERCHANT_ID;
  console.log(process.env.REACT_APP_MERCHANT_KEY);
  const handleCheckout = () => {
    // Handle checkout logic here
  };

  return (
    <MainWrapper>
      <div className="container py-4 align-self-center w-75 align-content-center d-flex flex-column">
        <h5 className="text-muted text-success fw-semibold text-center fs-4 text-uppercase mb-4">
          PAY WITH PAYFAST
        </h5>
        <form action={process.env.REACT_APP_MERCHANT_URL} method="post">
        {/* <input type="hidden" name="merchant_id" value={`${process.env.REACT_APP_MERCHANT_ID}`} /> */}
        <input type="hidden" name="merchant_id" value="10029131" />
        <input type="hidden" name="merchant_key" value="wldurmchgrkug" />
        <input type="hidden" name="amount" value={`${totalAmount.toFixed(2)}`} />
        <input type="hidden" name="item_name" value="Test Product" />
        <input type="hidden" name="return_url" value={`${process.env.REACT_APP_BASE_URL}/success`}/>
        <input type="hidden" name="cancel_url" value={`${process.env.REACT_APP_BASE_URL}/cancel`}/>
        <input type="hidden" name="notify_url" value={`${process.env.REACT_APP_BASE_URL}/notify`}/>
          <Button
            variant="contained"
            className="btn"
            type="submit"
          >
            Place Order
          </Button>
        </form>
      </div>
    </MainWrapper>
  );
};

export default PaymentPage;
