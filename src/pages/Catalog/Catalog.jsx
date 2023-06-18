import React, {useState} from 'react';
import CatalogCategories from "./CatalogCategories/CatalogCategories";
import CatalogProducts from "./CatalogProducts/CatalogProducts";
import CatalogObject from "./CatalogObject/CatalogObject";

const Catalog = () => {

    const [category, setCategory] = useState('all');
    const [order, setOrder] = useState('default');


    return (
        <main className="catalog">
            <div className="container">
                <h1 className="catalog__title">
                    Каталог продукции
                </h1>
                <div className="catalog__content">
                    <div className="catalog__left"><CatalogCategories category={category} setCategory={setCategory}/>
                        <CatalogObject order={order} setOrder={setOrder}/></div>
                    <div className="catalog__right"><CatalogProducts category={category} setCategory={setCategory}/></div>
                </div>
            </div>
        </main>
    );
};

export default Catalog;