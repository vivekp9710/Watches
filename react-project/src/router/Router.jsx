import React, { Component } from 'react'
import Home from '../ui/pages/Home/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Error404 from '../ui/pages/Error-404/Error404'
import LoginForm from '../ui/pages/Login'
import HeaderCom from '../ui/components/Header/HeaderCom'
import FooterCom from '../ui/components/Footer/FooterCom'
import Kids from '../ui/pages/Kids'
import Men from '../ui/pages/Men'
import Women from '../ui/pages/Women/Women'
import { Provider } from 'react-redux'
import { store } from "../Redux/app/store"
import Contact from '../ui/pages/Contact'
import About from "../ui/pages/About"
import Dashboard from '../ui/pages/Admin/Dashboard/Dashboard'
import ProductCom from '../ui/pages/Admin/Product/ProductCom'
import { AuthRoute, AdminAuth } from './AuthRoute'
import ProductPage from '../ui/pages/ProductPage/ProductPage'
import Profile from '../ui/pages/Profile/Profile'
import Orders from '../ui/pages/Admin/Order/Orders'
import Userlist from '../ui/pages/Admin/User/UserList'
import SignUp from '../ui/pages/SignUp/SignUp'


export default function Router() {
    return (
        <>
            <Provider store={store}>

                <BrowserRouter>
                    <HeaderCom />
                    <Routes>



                        {/* ---------public------------ */}

                        <Route path="/" element={<Home />} />
                        <Route path="/login" element={<LoginForm />} />
                        <Route path="/men" element={<Men />} />
                        <Route path="/women" element={<Women />} />
                        <Route path="/kids" element={<Kids />} />
                        <Route path="/About" element={<About />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path='/signup' element={<SignUp />} />
                        <Route path="/productpage/:id" element={<ProductPage />} />


                        {/* ---------Auth------------ */}


                        <Route path="/profile" element={<AuthRoute component={<Profile />} />} />


                        {/* --------Admin----------- */}


                        <Route path="/products" element={<AdminAuth component={<ProductCom />} />} />

                        <Route path="/orders" element={<AdminAuth component={<Orders />} />} />

                        <Route path="/user" element={<AdminAuth component={<Userlist />} />} />

                        <Route path='/admin/dashboard' element={<AdminAuth component={<Dashboard />} />} />

                        <Route path="*" element={<Error404 />} />
                    </Routes>

                    <FooterCom />
                </BrowserRouter>
            </Provider>

        </>
    );
}
