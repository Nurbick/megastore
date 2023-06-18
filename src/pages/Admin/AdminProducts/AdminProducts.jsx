import React from 'react';
import {useGetProductsQuery} from "../../../redux/reducers/products";
import Button from "../../../components/Button/Button";

const AdminProducts = ({products}) => {

    const {data = [], isLoading} = useGetProductsQuery();


    if (isLoading){
        return <h1>...Loading</h1>
    }
    return (
        <div style={{display: `${products ? "flex" : "none"}`}} className="adminProducts">
            <div className="adminProducts__buttons2">
                <Button type="button" name="Добавить товар"/>
            </div>
            {
                data.map((item)=>(
                    <div key={item.id} className="adminProducts__product">
                        <div className="adminProducts__img">
                            <img src={item.img} alt=""/>
                        </div>
                        <p className="adminProducts__name">
                            {item.name}
                        </p>
                        <div className="adminProducts__buttons">
                            <button className="adminProducts__button">
                                Изменить
                            </button>
                            <button className="adminProducts__button">
                                Удалить
                            </button>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default AdminProducts;