import React from "react";
import styles from "../../styles/nav.module.css";
import { Link } from "react-router-dom";

const TopNavBar = () => {
  return (
    <div className={`${styles.main} container-fluid`}>
      <div className={`${styles.wrapper} container gap-5 text-center py-2`}>
        <Link to={"/"} className={`${styles.link}`}>
          <h4 className="nav_item fs-5 text-light fw-light text-muted text-uppercase text-center my-auto">
            Home
          </h4>
        </Link>
        <Link to={"/shop"} className={`${styles.link}`}>
          <h4 className="nav_item fs-5 text-light fw-light text-muted text-uppercase text-center my-auto">
            Shop
          </h4>
        </Link>
        <Link to={"/faq"} className={`${styles.link}`}>
          <h4 className="nav_item fs-5 text-light fw-light text-muted text-uppercase text-center my-auto">
            FAQ
          </h4>
        </Link>
        <Link to={"/about"} className={`${styles.link}`}>
          <h4 className="nav_item fs-5 text-light fw-light text-muted text-uppercase text-center my-auto">
            About
          </h4>
        </Link>
      </div>
    </div>
  );
};

export default TopNavBar;
