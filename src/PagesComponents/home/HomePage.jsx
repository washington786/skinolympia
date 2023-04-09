import React, { useState } from "react";
import MainWrapper from '../../globals/MainWrapper'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { Form } from "react-bootstrap";
import { Box, Button, TextField } from "@mui/material";
import { Link } from "react-router-dom";
import "./styles.css";



const HomePage = () => {
  const [currentIndex, setCurrentIndex] = useState();

  function handleChange(index) {
    setCurrentIndex(index);
  }

  const imageData = [
    // {
    //   label: "Image 1",
    //   alt: "image1",
    //   url:
    //     "https://i.ibb.co/CPWMKWs/cosmetic.jpg"
    // },
    {
      label: "Image 2",
      alt: "image2",
      url:
        "https://i.ibb.co/djbd7KP/cosmetic-1.jpg"
    },
    {
      label: "Image 3",
      alt: "image3",
      url: "https://i.ibb.co/BLrXCVg/cosmetic-2.jpg"
    },
    {
      label: "Image 4",
      alt: "image4",
      url:
        "https://i.ibb.co/kQGgCS8/cosmetic-3.jpg"
    }
  ];

  const itemData = [
    {
      img: 'https://i.ibb.co/qFCh58K/product-3.jpg',
      title: 'Soap 1',
      price: 20.60
    },
    {
      img: 'https://i.ibb.co/vXJhH8F/product2.jpg',
      title: 'Soap 2',
      price: 30.50
    },
    {
      img: 'https://i.ibb.co/6yMDxCp/product-1.jpg',
      title: 'Soap 3',
      price: 49.13
    }
  ];

  
  const renderSlides = imageData.map((image) => (
    <div key={image.alt}>
      <img src={image.url} alt={image.alt} />
      {/*<p className="legend">{image.label}</p>*/}
    </div>
  ));

  return (
    <MainWrapper>
      <Carousel
        showThumbs={false}
        showArrows={false}
        showStatus={false}
        autoPlay={true}
        infiniteLoop={true}
        selectedItem={imageData[currentIndex]}
        onChange={handleChange}
        className="carousel-container"
      >
        {renderSlides}
      </Carousel>

      <p className="title">NEW IN STORE</p>

      <ImageList sx={{ width: "100%", height: "100%" }} cols={3} rowHeight={400}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={<div className="product-name">{item.title}</div>}
            subtitle={<div className="product-price">Price: R{item.price}</div>}
            position="below"
          />
        </ImageListItem>
      ))}
    </ImageList>

    
    <div>
      <img src="https://i.ibb.co/FgDCCKv/banner-adore.png" alt="react logo" style={{ width: '100%', height: '400px'}}/>
    </div>

    <div >
      <img src="https://i.ibb.co/fvQTjgG/insta.jpg" alt="react logo" style={{ width: '100%', height: '400px'}}/>
    </div>

    <div className="footer">
    
    </div>
    <FormWrapper/>
    </MainWrapper>
  )
}

const FormWrapper = () => {
  const [isActive, setActive] = useState(false);
  const onBlur = () => {
    setActive(true);
  };
  return (
    <Form>
      <div className="offer-heading">
        <p>ORDERS OVER R900 QUALIFY FOR FREE DELIVERY!</p>
      </div>
      <div className="offer-heading">
        <p>Get informed about new product launches, exclusive discounts, and promotions by subscribing to our newsletter.</p>
      </div>
      <Box component={"form"} noValidate autoComplete="off">
        <div className="container w-75">
          <TextField
            id="email"
            label="ENTER YOUR EMAIL"
            variant="standard"
            placeholder={!isActive ? "ENTER YOUR EMAIL" : ""}
            className="w-100"
            onBlur={onBlur}
            color="grey"
            type="email"
          />
        </div>
      </Box>
      <div className="tacbox">
        <input id="checkbox" type="checkbox" />
        
      </div>
      <div className="container w-75 flex-column d-flex">
        <Button
          variant="contained"
          color="success"
          className={`btn-warning text-secondary shadow-none my-3`}
        >
          SUBSCRIBE NOW
        </Button>
      </div>
    </Form>
  );
};

export default HomePage