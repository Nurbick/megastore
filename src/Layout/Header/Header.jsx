import React from 'react';
import logo from '../../assets/logo.png'
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <nav className="header__nav">
                    <h1 className="header__logo">
                        <img src={logo} alt="Company Logo"/>
                    </h1>
                    <ul className="header__links">
                        <Link to='/company' className="header__link">О компании</Link>
                        <Link to='/catalog' className="header__link">Каталог продукции</Link>
                        <Link to='/contacts' className="header__link">Контакты</Link>
                    </ul>
                    <div className="header__phone">
                        <a href="tel:+77777073797" className="header__number">
                            +7 (777) 707-37-97
                        </a>
                        <br/>
                        <Link to='#' className="header__call">
                        Заказать звонок
                    </Link>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;