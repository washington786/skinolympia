import React, { useState } from "react";
import MainWrapper from "../globals/MainWrapper";
import { Button } from "@mui/material";

import styles from "../styles/login.module.css";
import { Link } from "react-router-dom";

const CartPage = () => {
  const [isAuthenticated, setAuthenticated] = useState(false);
  setAuthenticated(isAuthenticated);
  return (
    <MainWrapper>
      <div className="container py-4 align-self-center w-75 align-content-center d-flex flex-column">
        <h5 className="text-muted text-success fw-semibold text-center fs-4 text-uppercase">
          Your Cart Is empty
        </h5>
        <Button
          variant="contained"
          className={`${styles.btn} align-self-center d-flex w-25 my-3 text-secondary`}
        >
          continue shopping
        </Button>
        {!isAuthenticated && <WrapperOnAuth />}
      </div>
    </MainWrapper>
  );
};

const WrapperOnAuth = () => {
  return (
    <>
      <h5 className="text-muted text-success fw-semibold text-center fs-4 text-uppercase d-block mt-5">
        Have an account?
      </h5>
      <Button
        variant="text"
        className="text-success fw-lighter fs-6 w-50 align-self-center"
      >
        <Link
          to={"/login"}
          className="text-decoration-underline pe-3 text-success"
        >
          log in{" "}
        </Link>{" "}
        to check out faster
      </Button>
    </>
  );
};
export default CartPage;
