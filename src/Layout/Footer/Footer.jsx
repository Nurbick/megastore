import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import logo from '../../assets/footerLogo.png'
import studio from '../../assets/studio 1.png'
import {useNavigate} from "react-router-dom";
import {CustomContext} from "../../utils/Context";

const Footer = () => {

    const navigate = useNavigate();
    const {setOverlay} = useContext(CustomContext);
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__content">
                    <div className="footer__up">
                        <h1 onClick={()=> navigate('/')} className="footer__logo">
                            <img src={logo} alt="Logo"/>
                        </h1>
                        <ul className="footer__links">
                            <Link to='/company' className="footer__link">О компании</Link>
                            <Link to='/catalog' className="footer__link">Каталог продукции</Link>
                            <Link to='/contact' className="footer__link">Контакты</Link>
                        </ul>
                        <div className="footer__phone">
                            <a href="tel:+77777073797" className="footer__number">
                                +7 (777) 707-37-97
                            </a>
                            <br/>
                            <p onClick={()=> setOverlay(true)} className="footer__call">
                                Заказать звонок
                            </p>
                        </div>
                    </div>
                    <hr/>
                    <div className="footer__down">
                        <p className="footer__down-text">
                            2021 Все права защищены.
                        </p>
                        <span className="footer__studio">
                            <img src={studio} alt="Studio"/>
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;