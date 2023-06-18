import React from 'react';
import {useGetPartnersQuery} from "../../../redux/reducers/partners";


const Partners = () => {

    const {data = [], isLoading} = useGetPartnersQuery();

    if (isLoading) {
        return <h2>...Loading</h2>
    }

    return (
        <section className="partners">
            <div className="container">
                <h2 className="partners__title">
                    Наши партнеры
                </h2>
                <ul className="partners__content">
                    {
                       data.map((item)=>(
                           <li key={item.id} className="partners__item">
                               <img src={`${item.img}`} alt=""/>
                           </li>
                       ))
                    }
                </ul>
            </div>
        </section>
    );
};

export default Partners;