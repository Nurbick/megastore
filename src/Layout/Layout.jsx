import React from 'react';
import Header from "./Header/Header";
import { Outlet } from 'react-router-dom'
import Footer from "./Footer/Footer";

const Layout = () => {


    return (
        <div>
            <Header/>
            <main className='main'>
                    <div className='main__content'>
                        <div className='main__outlet'>
                            <Outlet/>
                        </div>
                </div>
            </main>
            <Footer/>
        </div>
    );
};

export default Layout;