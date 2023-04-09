import React from "react";
import MainWrapper from "../../globals/MainWrapper";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import Button from '@mui/material/Button';

const ShopPage = ({ addToCart }) => {

  const itemData = [
    // {
    //   img: 'https://i.ibb.co/qFCh58K/product-3.jpg',
    //   title: 'Soap 1',
    //   price: 20.60
    // },
    {
      id: 401,
      img: 'https://i.ibb.co/vXJhH8F/product2.jpg',
      title: 'Soap 2',
      price: 30.50
    },
    {
      id: 402,
      img: 'https://i.ibb.co/qFCh58K/product-3.jpg',
      title: 'Soap 1',
      price: 20.60
    },
    {
      id: 403,
      img: 'https://i.ibb.co/6yMDxCp/product-1.jpg',
      title: 'Soap 3',
      price: 49.13
    }
  ];

  return (
    <MainWrapper>
      <ImageList sx={{ width: "100%", height: "100%" }} cols={4} rowHeight={400}>
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
            actionIcon={
              <Button
                variant="contained"
                onClick={() => addToCart({
                  id: item.id,
                  name: item.title,
                  price: item.price,
                  quantity: 1
                })}
              >
                Add to Cart
              </Button>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
    </MainWrapper>
  );
};

export default ShopPage;
