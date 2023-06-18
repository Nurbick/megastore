import React, {useContext} from 'react';
import {useFilterProductsQuery} from "../../../redux/reducers/products";
import {useNavigate} from "react-router-dom";
import Button from "../../../components/Button/Button";
import {CustomContext} from "../../../utils/Context";
import {useSelector} from "react-redux";
import {userSelector} from "../../../redux/reselector";

const CatalogProducts = ({category, setCategory}) => {


    const {addBasket, setOverlay} = useContext(CustomContext);

    const { user } = useSelector(userSelector);

    const navigate = useNavigate();
    const {data = [], isLoading} = useFilterProductsQuery({category});
    if (isLoading){
        return <h2>...Loading</h2>
    }




    return (
        <div className="catalog__products">
            {
                data.map((item)=>(
                    <div key={item.id} className="catalog__product">
                        <div onClick={() => navigate(`/product/${item.id}`)} className="catalog__product-img">
                            <img src={item.img} alt=""/>
                        </div>
                        <p onClick={() => navigate(`/product/${item.id}`)} className="catalog__product-name">
                            {item.name}
                        </p>
                        <div className="catalog__product-btns">
                            <Button onClick={()=>setOverlay(true)} type="button" name="Быстрый заказ"/>
                            {user!==undefined ? <Button onClick={()=> addBasket(item)} type="button" name="В корзину"/> : ''}
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default CatalogProducts;