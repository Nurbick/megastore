import React from 'react';
import Layout from "../Layout/Layout";
import {Route, Routes} from "react-router-dom";
import Home from "../pages/Home/Home";
import Catalog from "../pages/Catalog/Catalog";
import ProductInfo from "../pages/ProductInfo/ProductInfo";
import Basket from "../pages/Basket/Basket";
import Contact from "../pages/Home/Contact/Contact";
import Admin from "../pages/Admin/Admin";
import NotFound from "../pages/NotFound/NotFound";
import {useSelector} from "react-redux";

const PrivateRouting = () => {

    const {user} = useSelector((store)=>store.persistedReducer.user.user);


    return (
        <Routes>
            <Route path='/' element={<Layout/>}>
                <Route path="" element={<Home/>}/>
                <Route path="catalog" element={<Catalog/>}/>
                <Route path="product/:id" element={<ProductInfo/>}/>
                <Route path="basket" element={<Basket/>}/>
                <Route path="contact" element={<Contact/>}/>
                {user.login==='Nurbick220' ? <Route path="admin" element={<Admin/>}/> : ''}
            </Route>
            <Route path="*" element={<NotFound/>}/>
        </Routes>
    );
};

export default PrivateRouting;