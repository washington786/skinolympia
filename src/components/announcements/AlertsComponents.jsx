import React, { Fragment } from "react";

const AlertsComponents = ({ alert }) => {
  return (
    <Fragment>
      {alert && (
        <div className="align-self-center container bg-light my-2 w-75 align-items-center justify-content-center text-center border-3 border-secondary rounded-2">
          <p className="text-muted fw-light text-center py-2">{alert}</p>
        </div>
      )}
    </Fragment>
  );
};

export default AlertsComponents;
