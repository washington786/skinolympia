import React from 'react'
import { Route, Routes } from 'react-router-dom'
import NavComponent from '../nav/Nav'
import HomePage from '../../PagesComponents/HomePage'
import ShopPage from '../../PagesComponents/ShopPage'
import FaqPage from '../../PagesComponents/FaqPage'
import AboutPage from '../../PagesComponents/AboutPage'
import LoginPage from '../../PagesComponents/LoginPage'
import RegisterPage from '../../PagesComponents/RegisterPage'
import CartPage from '../../PagesComponents/CartPage'
import ResetPassword from '../../PagesComponents/ResetPassword'

const MainNavigationRoute = () => {
  return (
    <Routes>
        <Route element={<NavComponent/>} path='/'>
            <Route path='/' element={<HomePage/>} index/>
            <Route path='shop' element={<ShopPage/>}/>
            <Route path='faq' element={<FaqPage/>}/>
            <Route path='about' element={<AboutPage/>}/>
            <Route path='login' element={<LoginPage/>}/>
            <Route path='register' element={<RegisterPage/>}/>
            <Route path='cart' element={<CartPage/>}/>
            <Route path='reset' element={<ResetPassword/>}/>
        </Route>
    </Routes>
  )
}

export default MainNavigationRoute