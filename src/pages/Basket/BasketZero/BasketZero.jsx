import React, {useContext} from 'react';
import Button from "../../../components/Button/Button";
import icon from '../../../assets/bad-mood.png'
import {useNavigate} from "react-router-dom";
import {CustomContext} from "../../../utils/Context";

const BasketZero = () => {

    const {show, setShow} = useContext(CustomContext);

    const exitBasket = (e)=>{
        if (e.target.classList.contains(`basketZero`) || e.target.classList.contains('basketZero__close')){
            setShow(false)
        }
    };

    const navigate = useNavigate();
    return (
        <div onClick={exitBasket} style={{display:`${show ? 'flex' : 'none'}`}} className="basketZero">
            <div className="basketZero__block">
                <img src={icon} alt="qwerty" className="basketZero__icon"/>
                <h2 className="basketZero__title">
                    КОРЗИНА ПУСТАЯ
                </h2>
                <Button onClick={()=> {setShow(false); navigate('/catalog')}} name="Каталог"/>
                <span onClick={exitBasket} className="basketZero__close">
                    X
                </span>
            </div>
        </div>
    );
};

export default BasketZero;