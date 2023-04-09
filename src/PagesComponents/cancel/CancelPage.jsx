import React from "react";
import styles from "../../styles/login.module.css";
import { Link } from "react-router-dom";
import "./styles.css";

const CancelPage = () => {
  return (
    <div>
      <h1>Payment Cancelled!</h1>
      <div className="d-flex justify-content-end">
      <Link
            to="/shop"
            variant="contained"
            className={`${styles.btn} me-3 text-secondary`}
          >
            CONTINUE SHOPPING
          </Link>
        </div>
    </div>
  );
};

export default CancelPage;