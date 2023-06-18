import React, {useContext} from 'react';
import logo from '../../assets/logo.png'
import {Link} from "react-router-dom";
import {useNavigate} from 'react-router-dom'
import {SlBasket} from 'react-icons/sl'
import {CustomContext} from "../../utils/Context";
import BasketZero from "../../pages/Basket/BasketZero/BasketZero";
import Overlay from "../../components/Overlay/Overlay";
import {useDispatch, useSelector} from "react-redux";
import {userSelector} from "../../redux/reselector";
import { logOutUser } from '../../redux/reducers/user.js';

const Header = () => {

    const {basket} = useContext(CustomContext);
    const navigate = useNavigate();
    const {setShow} = useContext(CustomContext);
    const { user } = useSelector(userSelector);
    const dispatch = useDispatch();



    return (
        <header className="header">
            <div className="container">
                <nav className="header__nav">
                    <h1 onClick={()=>navigate('/')} className="header__logo">
                        <img src={logo} alt="Company Logo"/>
                    </h1>
                    <ul className="header__links">
                        <Link to='/company' className="header__link">О компании</Link>
                        <Link to='/catalog' className="header__link">Каталог продукции</Link>
                        <Link to='/contact' className="header__link">Контакты</Link>
                    </ul>
                    {user!==undefined ? <p onClick={()=>dispatch(logOutUser())} className="header__user">
                        Выйти
                    </p> : <p onClick={()=> navigate('/login')} className="header__user">
                        Войти
                    </p>
                    }

                    {user!==undefined?
                        <div onClick={()=>{
                            if (basket.length){
                                navigate('/basket')
                            } else {
                                setShow(true)
                            }
                        }} className="header__basket">
                            <i className="header__basket-icon">
                                <SlBasket size={30}/>
                            </i>
                            <p className="header__basket-length">
                                {basket.length}
                            </p>
                        </div> :
                        ''
                    }
                </nav>
            </div>
            <BasketZero/>
            <Overlay/>
        </header>
    );
};

export default Header;