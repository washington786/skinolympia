import React from "react";
import MainWrapper from "../globals/MainWrapper";
import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material";
import { Add } from "@mui/icons-material";

import styles from '../styles/faq.module.css';
import { faq_data } from "../data/Faq";

const FaqPage = () => {
  let sub =
    "Check most frequently asked questions here! if you still need help then please contact us at skin.olympiacosmetics@gmail.com. Someone will be in touch with you within 48hours.";
  return (
    <MainWrapper>
      <div className="container py-4 align-self-center w-75">
        <h5 className="text-muted text-success fw-semibold text-center fs-4 text-capitalize">
          frequently asked questions
        </h5>

        <span className="text-muted fs-6 fw-lighter py-3 text-secondary text-center d-block ">
          {sub}
        </span>
        <AccordionList/>
      </div>
    </MainWrapper>
  );
};

const AccordionList=()=>{
  return (
    <>
    {
      faq_data.map((data,index)=>{
        const {id,title,content} = data;
        return(<AccordionWrapper title={title} content={content} indexKey={id}/>)
      })

    }
    </>
  )
}

const AccordionWrapper=({title,content,indexKey})=>{
  return(
    <>
    <Accordion className={`${styles.acc} shadow-none`} key={indexKey}>
      <AccordionSummary expandIcon={<Add/>} aria-controls="panel1a-content" id="panel1a-header">
        <Typography>{title}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography className="text-muted fs-6 fw-lighter text-secondary">{content}</Typography>
      </AccordionDetails>
    </Accordion>
    </>
  )
}

export default FaqPage;
