import React, {useContext, useState} from 'react';
import {CustomContext} from "../../utils/Context";
import {useNavigate} from "react-router-dom";

const Basket = () => {

    const {basket, minusOneBasket, plusOneBasket, delBasket} = useContext(CustomContext);
    const navigate = useNavigate();
    const [total, setTotal] = useState();
    return (
        <section className="basket">
            <div className="container">
                <h1 className="basket__title">
                    Корзина
                </h1>
                <ul className="basket__desc">
                    <li className="basket__desc-item name">
                        Название товара:
                    </li>
                    <li className="basket__desc-item price">
                        Цена товара
                    </li>
                    <li className="basket__desc-item quantity">
                        Количество
                    </li>
                    <li className="basket__desc-item sum">
                        Сумма
                    </li>
                </ul>
                <ul className="basket__list">
                    {
                        basket.map((item)=>(
                            <li key={item.id} className="basket__item">
                                <span onClick={()=> navigate(`/product/${item.id}`)} className="basket__item-name">{item.name}</span>

                                <div className='basket__item-right'>

                                    <span className="basket__item-price">
                                        ${item.price}
                                    </span>

                                    <div className='basket__item-count'>
                                        <button onClick={()=> minusOneBasket(item.id)} type='button' className='basket__item-minus'>-</button>
                                        <span className='basket__item-count-num'>
                                    {item.count}
                                </span>
                                        <button onClick={()=> plusOneBasket(item.id)} type='button' className='basket__item-plus'>+</button>
                                    </div>

                                    <p className='basket__item-sum'>
                                        ${item.price * item.count}
                                    </p>

                                    <button type='button' onClick={()=> delBasket(item.id)} className='basket__item-del'>X</button>

                                </div>
                            </li>
                        ))
                    }
                </ul>
                <div className="basket__total">

                </div>
            </div>
        </section>
    );
};

export default Basket;