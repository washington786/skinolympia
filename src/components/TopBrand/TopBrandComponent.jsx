import {
  AccountBox,
  Instagram,
  Search,
  ShoppingBag,
  YouTube,
} from "@mui/icons-material";
import React from "react";
import styles from "../../styles/brand.module.css";
import Logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const TopBrandComponent = ({onHandleSearch}) => {
  return (
    <div className={`${styles.main_container} container align-items-center`}>
      <div className="p-4 mx-2" onClick={onHandleSearch}>
        <Search className={`${styles.icon}`}/>
      </div>
      <div className="py-2 align-items-center justify-content-center">
        <img src={Logo} alt="logo" className={`img-fluid ${styles.brand}`} />
      </div>
      <div className="p-4 mx-2">
        <Instagram className={`${styles.icons} text-secondary px-2`} />
        <YouTube className={`${styles.icons} text-secondary px-2`} />
        <Link to={'/login'}>
          <AccountBox className={`${styles.icons} text-secondary px-2`} />
        </Link>
        <Link to={'/cart'}>
          <ShoppingBag className={`${styles.icons} text-secondary px-2`} />
        </Link>
      </div>
    </div>
  );
};

export default TopBrandComponent;
