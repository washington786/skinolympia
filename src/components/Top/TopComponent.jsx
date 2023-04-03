import React, { Fragment } from "react";
import AlertsComponents from "../announcements/AlertsComponents";
import TopBrandComponent from "../TopBrand/TopBrandComponent";
import TopNavBar from "../TopNav/TopNavBar";

const TopComponent = ({onHandleSearch}) => {
  let alert = "SPRING IS HERE! USE CODE `SWEET_SPRING` FOR 10% OFF!"; 
  return (
    <Fragment>
      <div className="container">
        <AlertsComponents alert={alert} />
        <TopBrandComponent onHandleSearch={onHandleSearch}/>
      </div>
      <TopNavBar/>
    </Fragment>
  );
};

export default TopComponent;
