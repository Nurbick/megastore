import React from 'react';
import {useAddProductsMutation} from "../../../redux/reducers/products";

const AddProduct = () => {

    const [addProduct] = useAddProductsMutation();


    return (
        <section className="addProduct">
            <form action="" className="addProduct__form">
                <h2 className="addProduct__title">
                    Добавить продукт
                </h2>
                <label htmlFor="" className="addProduct__label">
                    <input type="text" value="name" placeholder="Название" className="addProduct__input"/>
                    <input type="text" value="price" placeholder="Цена" className="addProduct__input"/>
                    <input type="text" value="category" placeholder="Категория" className="addProduct__input"/>
                    <input type="text" value="length" placeholder="Длинна" className="addProduct__input"/>
                    <input type="text" value="width" placeholder="Ширина" className="addProduct__input"/>
                    <input type="text" value="height" placeholder="Высота" className="addProduct__input"/>
                    <input type="text" value="voltage" placeholder="Напряжение" className="addProduct__input"/>
                    <input type="text" value="defrosting" placeholder="Размораживание" className="addProduct__input"/>
                    <input type="text" value="freeze" placeholder="Замораживание" className="addProduct__input"/>
                    <input type="text" value="img" placeholder="Вставьте ссылку на картинку" className="addProduct__input"/>
                </label>
            </form>
        </section>
    );
};

export default AddProduct;