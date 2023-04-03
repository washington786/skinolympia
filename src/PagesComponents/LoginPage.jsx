import React, { useState } from "react";
import MainWrapper from "../globals/MainWrapper";
import { Form } from "react-bootstrap";
import { Box, Button, TextField } from "@mui/material";

import styles from "../styles/login.module.css";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <MainWrapper>
      <div className="container w-50 align-self-center bg-transparent d-flex flex-column py-4 px-5">
        <h3 className="text-muted text-success text-uppercase fw-light text-center">
          login
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
        <Link to={"/reset"} className="text-start d-block align-self-start">
          <Button className="text-success fw-light text-decoration-underline p-0 m-0 text-start d-block">
            Forgot your password?
          </Button>
        </Link>
        <Button
          variant="contained"
          color="warning"
          className={`${styles.btn} btn-warning text-secondary shadow-none my-3`}
        >
          Sign In
        </Button>
        <Link
          to={"/register"}
          className="text-center d-block align-self-center"
        >
          <Button className="text-success fw-light text-decoration-underline p-0 m-0 text-center d-block">
            create account
          </Button>
        </Link>
      </div>
    </Form>
  );
};

export default LoginPage;
