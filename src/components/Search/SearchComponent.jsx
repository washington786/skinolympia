import React from 'react';
import styles from '../../styles/search.module.css';
import { CloseButton, Form } from 'react-bootstrap';
import { Box, TextField } from '@mui/material';

const SearchComponent = ({onHandleClose}) => {
  return (
    <div className={`${styles.main} container-fluid ws-100 bg-light position-absolute top-0`}>
        <div className="container py-5 align-items-center justify-content-center d-block">
            <CloseButton className={`${styles.close}`} onClick={onHandleClose}/>
            <FormWrapper/>
        </div>
    </div>
  )
}

const FormWrapper = () => {
  return (
    <Form>
      <Box component={"form"} noValidate autoComplete="off">
        <div className="container w-50">
          <TextField
            id="search"
            label="Search"
            variant="standard"
            className="w-100"
            color="grey"
            type="search"
            autoFocus
          />
        </div>
      </Box>
    </Form>
  );
};

export default SearchComponent