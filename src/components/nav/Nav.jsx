import React, { Fragment, useState } from "react";
import { Outlet } from "react-router-dom";
import TopComponent from "../Top/TopComponent";
import SearchComponent from "../Search/SearchComponent";

const NavComponent = () => {
  const [showSearch,setSearch] = useState(false);

  const onHandleSearch=()=>{
    setSearch(!showSearch);
  }

  return (
    <Fragment>
      <TopComponent onHandleSearch={onHandleSearch}/>
      <Outlet />
      {
        showSearch && <SearchComponent onHandleClose={onHandleSearch}/>
      }
    </Fragment>
  );
};


export default NavComponent;
