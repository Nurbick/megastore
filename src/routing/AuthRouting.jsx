import React from 'react';
import {Route, Routes} from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../pages/Home/Home";
import Catalog from "../pages/Catalog/Catalog";
import ProductInfo from "../pages/ProductInfo/ProductInfo";
import Contact from "../pages/Home/Contact/Contact";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import NotFound from "../pages/NotFound/NotFound";

const AuthRouting = () => {
    return (
        <Routes>
            <Route path='/' element={<Layout/>}>
                <Route path="" element={<Home/>}/>
                <Route path="catalog" element={<Catalog/>}/>
                <Route path="product/:id" element={<ProductInfo/>}/>
                <Route path="contact" element={<Contact/>}/>
            </Route>
            <Route path="login" element={<Login/>}/>
            <Route path="register" element={<Register/>}/>
            <Route path="*" element={<NotFound/>}/>
        </Routes>
    );
};

export default AuthRouting;