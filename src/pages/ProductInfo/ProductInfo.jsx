import React, {useContext} from 'react';
import {useGetProductQuery} from "../../redux/reducers/products";
import {useParams} from "react-router-dom";
import Button from "../../components/Button/Button";
import {CustomContext} from "../../utils/Context";

const ProductInfo = () => {

    const {addBasket} = useContext(CustomContext);
    const {id} = useParams();

    const {data = {}, isLoading} = useGetProductQuery(id);

    if (isLoading){
        return <h1>...Loading</h1>
    }


    return (
        <main className="productInfo">
            <div className="container">
                <div className="productInfo__content">
                    <div className="productInfo__left">
                        <img src={data.img} alt="" className="productInfo__img"/>
                    </div>
                    <div className="productInfo__right">
                        <h2 className="productInfo__title">
                            {data.name}
                        </h2>
                        <ul className="productInfo__info">
                            <li className="productInfo__item">
                                <div className="productInfo__item-left">
                                    Холодообеспечение
                                </div>
                                <div className="productInfo__item-right">
                                    {data.freeze==="built-in"? "Встроенное" : "Невстроенное"}
                                </div>
                            </li>
                            <li className="productInfo__item">
                                <div className="productInfo__item-left">
                                    Размеры (ДхГхВ)
                                </div>
                                <div className="productInfo__item-right">
                                    {data.size.length}X{data.size.width}X{data.size.height} мм
                                </div>
                            </li>
                            <li className="productInfo__item">
                                <div className="productInfo__item-left">
                                    Способ оттаивания
                                </div>
                                <div className="productInfo__item-right">
                                    {data.defrosting}
                                </div>
                            </li>
                            <li className="productInfo__item">
                                <div className="productInfo__item-left">
                                    Напряжение
                                </div>
                                <div className="productInfo__item-right">
                                    {data.voltage}В
                                </div>
                            </li>
                            <li className="productInfo__item">
                                <div className="productInfo__item-left">
                                    Цена
                                </div>
                                <div className="productInfo__item-right">
                                    {data.price}$
                                </div>
                            </li>
                        </ul>
                        <div className="productInfo__btns">
                            <Button type="button" name="Быстрый заказ"/>
                            <Button onClick={()=>addBasket(data)} type="button" name="В корзину"/>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default ProductInfo;