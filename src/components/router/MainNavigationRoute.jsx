import React, { useState } from "react";
import { Route, Routes } from 'react-router-dom'
import NavComponent from '../nav/Nav'
import HomePage from '../../PagesComponents/home/HomePage'
import ShopPage from '../../PagesComponents/shop/ShopPage'
import FaqPage from '../../PagesComponents/FaqPage'
import AboutPage from '../../PagesComponents/AboutPage'
import LoginPage from '../../PagesComponents/LoginPage'
import RegisterPage from '../../PagesComponents/RegisterPage'
import CartPage from '../../PagesComponents/cart/CartPage'
import CheckoutPage from '../../PagesComponents/checkout/CheckoutPage'
import PaymentPage from '../../PagesComponents/payment/PaymentPage'
import SuccessPage from '../../PagesComponents/success/SuccessPage'
import CancelPage from '../../PagesComponents/cancel/CancelPage'
import ResetPassword from '../../PagesComponents/ResetPassword'

const MainNavigationRoute = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    console.log("Current Product:" + product.id);
    // Check if product already exists in cart
    const existingProductIndex = cartItems.findIndex(
      (item) => item.id === product.id
    );
  
    if (existingProductIndex !== -1) {
      // If product exists, update quantity
      const newCartItems = [...cartItems];
      const existingProduct = newCartItems[existingProductIndex] || { quantity: 0 };
      existingProduct.quantity += product.quantity || 1;
      setCartItems(newCartItems);
      console.log("Exit Current Cart: ", cartItems);
    } else {
      // If product doesn't exist, add to cart
      const newCartItems = cartItems.length > 0 ? [...cartItems] : [];
      newCartItems.push({...product, quantity: product.quantity || 1});
      setCartItems(newCartItems);
    }
  };

  const updateCartItems = (newCartItems) => {
    setCartItems(newCartItems);
  };

  const removeFromCart = (productId) => {
    const newCartItems = cartItems.filter((item) => item.id !== productId);
    updateCartItems(newCartItems);
  };


  return (
    <Routes>
        <Route element={<NavComponent cartItems={cartItems}/>}>
            <Route path='/' element={<HomePage />} index/>
            <Route path='shop' element={<ShopPage addToCart={addToCart}/>}/>
            <Route path='faq' element={<FaqPage/>}/>
            <Route path='about' element={<AboutPage/>}/>
            <Route path='login' element={<LoginPage/>}/>
            <Route path='register' element={<RegisterPage/>}/>
            <Route path='cart' element={<CartPage cartItems={cartItems} removeFromCart={removeFromCart}/>}/>
            <Route path='checkout' element={<CheckoutPage cartItems={cartItems}/>}/>
            <Route path='payment' element={<PaymentPage cartItems={cartItems}/>}/>
            <Route path='success' element={<SuccessPage/>}/>
            <Route path='cancel' element={<CancelPage/>}/>
            <Route path='reset' element={<ResetPassword/>}/>
        </Route>
    </Routes>
  )
}

export default MainNavigationRoute
