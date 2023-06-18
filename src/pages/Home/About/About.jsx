import React from 'react';
import leftImg from '../../../assets/aboutLeft.png'
import rightImg from '../../../assets/aboutRight.png'

const About = () => {
    return (
        <section className="about">
            <div className="container">
                <div className="about__content">
                    <div className="about__left">
                        <div className="about__left-img">
                            <img src={leftImg} alt=""/>
                        </div>
                        <div className="about__left-text">
                            <h3 className="about__left-title">Мы предлагаем:</h3>
                            <ul className="about__left-list">
                                <li className="about__left-item">проектирование предприятий общественного питания и торговли;</li>
                                <li className="about__left-item">обустройство в формате «под ключ» магазинов, фаст-фудов, ресторанов, мини-производств и предприятий общепита;</li>
                                <li className="about__left-item">разработка с нуля схем оснащения для торговых точек с центральным, встроенным или выносным холодоснабжением (с использованием импортного или отечественного оборудования);</li>
                                <li className="about__left-item">оперативная доставка, качественный монтаж и сервисное обслуживание</li>
                            </ul>
                        </div>
                    </div>
                    <div className="about__right">
                        <h3 className="about__right-title">О компании</h3>
                        <p className="about__right-text">
                            Компания ТОО «Мегахолод 2007» предлагает купить торговое оборудование в Нур-Султане и других городах Республики Казахстан. У нас есть все необходимое для организации или автоматизации работы вашего ресторана, кафе, пекарни или супермаркета.
                            Наша компания – надежный поставщик: к вашим услугам - каталог продукции с разнообразным товарным ассортиментом и выгодные коммерческие предложения разной ценовой категории.
                        </p>
                        <div className="about__right-img">
                            <img src={rightImg} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;