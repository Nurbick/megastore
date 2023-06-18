import React from 'react';
import Button from "../../components/Button/Button";
import {useNavigate} from "react-router-dom";
import notFound from '../../assets/NotFound.jpg'

const NotFound = () => {

    const navigate = useNavigate();

    return (
        <section className="notFound">
            <div className="container">
                <div className="notFound__content">
                    <img src={notFound} alt="" className="notFound__img"/>
                    <h1 className="notFound__title">
                        Страница не найдена
                    </h1>
                    <p className="notFound__desc">
                        Возможно вы перешли по неверной ссылке, проверьте её или перейдите на главную страницу, нажав на кнопку
                    </p>
                    <Button type="button" onClick={()=>navigate('/')} name="На главную"/>
                </div>
            </div>
        </section>
    );
};

export default NotFound;