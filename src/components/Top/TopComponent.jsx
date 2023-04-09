import React, { Fragment } from "react";
import AlertsComponents from "../announcements/AlertsComponents";
import TopBrandComponent from "../TopBrand/TopBrandComponent";
import TopNavBar from "../TopNav/TopNavBar";

const TopComponent = ({onHandleSearch, cartItems}) => {
  let alert = "ORDERS OVER R900 QUALIFY FOR FREE DELIVERY!"; 
  return (
    <Fragment>
      <div className="container">
        <AlertsComponents alert={<div>{alert}</div>} />
        <TopBrandComponent onHandleSearch={onHandleSearch} cartItems={cartItems}/>
      </div>
      <TopNavBar/>
    </Fragment>
  );
};

export default TopComponent;
