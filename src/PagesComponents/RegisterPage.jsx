import React, { useState } from "react";
import MainWrapper from "../globals/MainWrapper";
import { Box, Button, TextField } from "@mui/material";
import { Form } from "react-bootstrap";

import styles from "../styles/login.module.css";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  return (
    <MainWrapper>
      <div className="container w-50 align-self-center bg-transparent d-flex flex-column py-4 px-5">
        <h3 className="text-muted text-success text-uppercase fw-light text-center">
          create account
        </h3>
        <FormWrapper />
      </div>
    </MainWrapper>
  );
};
const FormWrapper = () => {
  const [isActive, setActive] = useState(false);
  const onBlur = () => {
    setActive(true);
  };

  return (
    <Form>
      <Box component={"form"} noValidate autoComplete="off">
        <div className="container w-75">
          <TextField
            id="firstName"
            label="First Name"
            variant="standard"
            placeholder={!isActive ? "First Name" : ""}
            className="w-100"
            onBlur={onBlur}
            color="grey"
            type="text"
          />
        </div>
      </Box>
      <Box component={"form"} noValidate autoComplete="off">
        <div className="container w-75">
          <TextField
            id="lastName"
            label="Last Name"
            variant="standard"
            placeholder={!isActive ? "enter LastName" : ""}
            className="w-100"
            onBlur={onBlur}
            color="grey"
            type="text"
          />
        </div>
      </Box>
      <Box component={"form"} noValidate autoComplete="off">
        <div className="container w-75">
          <TextField
            id="email"
            label="Email"
            variant="standard"
            placeholder={!isActive ? "enter email" : ""}
            className="w-100"
            onBlur={onBlur}
            color="grey"
            type="email"
          />
        </div>
      </Box>
      <Box component={"form"} noValidate autoComplete="off">
        <div className="container w-75 my-3">
          <TextField
            id="password"
            label="Password"
            variant="standard"
            placeholder={!isActive ? "enter email" : ""}
            className="w-100"
            onBlur={onBlur}
            color="grey"
            type="password"
          />
        </div>
      </Box>
      <div className="container w-75 flex-column d-flex">
        <Button
          variant="contained"
          color="warning"
          className={`${styles.btn} btn-warning text-secondary shadow-none my-3`}
        >
          Create
        </Button>
        <Link to={"/login"} className="text-center d-block align-self-center">
          <Button className="text-success fw-light text-decoration-underline p-0 m-0 text-center d-block">
            Sign In
          </Button>
        </Link>
      </div>
    </Form>
  );
};
export default RegisterPage;
