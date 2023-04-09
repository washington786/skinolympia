import {
  AccountBox,
  Instagram,
  Search,
  ShoppingBag,
  YouTube,
} from "@mui/icons-material";
import React, { useState } from "react";
import styles from "../../styles/brand.module.css";
import Logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const CartDropdown = ({ cartItems }) => {
  console.log(cartItems);
  return (
    <div className="dropdown-menu dropdown-menu-end p-0" aria-labelledby="navbarDropdown">
      {cartItems && cartItems.map((item) => (
        <div key={item.id} className="dropdown-item">
          {item.name} ({item.quantity})
        </div>
      ))}
    </div>
  );
};

const TopBrandComponent = ({ onHandleSearch, cartItems }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const totalQuantity = cartItems ? cartItems.reduce((acc, item) => acc + item.quantity, 0) : 0;

  const toggleDropdown = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };

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
        <Link to={'/cart'} className="dropdown-toggle" onClick={toggleDropdown}>
          <ShoppingBag className={`${styles.icons} text-secondary px-2`} />
          {totalQuantity > 0 && <span className="badge bg-danger">{totalQuantity}</span>}
        </Link>
        {isDropdownOpen && <CartDropdown cartItems={cartItems} />}
      </div>
    </div>
  );
};

export default TopBrandComponent;
