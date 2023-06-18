import React from 'react';
import adv1 from '../../../assets/adv1.png'
import adv2 from '../../../assets/adv2.png'
import adv3 from '../../../assets/adv3.png'
import adv4 from '../../../assets/adv4.png'
import arrow from '../../../assets/Arrow.svg'

const Advantages = () => {
    return (
        <section className="advantages">
            <div className="container">
                <h2 className="advantages__title">Наши преимущества</h2>
                <ul className="advantages__content">
                    <li className="advantages__item">
                        <img src={adv1} alt="" className="advantages__img"/>
                        <span className="advantages__text">Заказ</span>
                    </li>
                    <img src={arrow} alt="arrow" className="arrow"/>
                    <li className="advantages__item">
                        <img src={adv2} alt="" className="advantages__img"/>
                        <span className="advantages__text">Доставка</span>
                    </li>
                    <img src={arrow} alt="arrow" className="arrow"/>
                    <li className="advantages__item">
                        <img src={adv3} alt="" className="advantages__img"/>
                        <span className="advantages__text">Сборка</span>
                    </li>
                    <img src={arrow} alt="arrow" className="arrow"/>
                    <li className="advantages__item">
                        <img src={adv4} alt="" className="advantages__img"/>
                        <span className="advantages__text">Подключение</span>
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default Advantages;