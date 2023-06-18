import React, {useContext} from 'react';
import Button from "../../../components/Button/Button";
import {useNavigate} from "react-router-dom";
import {CustomContext} from "../../../utils/Context";

const Contact = () => {
    const navigate = useNavigate();
    const {setOverlay} = useContext(CustomContext);
    return (
        <section className="contact">
           <div className="container">
               <div className="contact__content">
                   <div className="contact__card">
                       <div className="contact__card__address">
                           <h3 className="contact__card__address-title">
                               Адрес:
                           </h3>
                           <p className="contact__card__address-text">
                               4517 Washington Ave. Manchester, Kentucky 39495
                           </p>
                       </div>
                       <div className="contact__card__address">
                           <h3 className="contact__card__address-title">
                               Офис продаж:
                           </h3>
                           <p className="contact__card__address-text">
                               4517 Washington Ave. Manchester, Kentucky 39495
                           </p>
                       </div>
                       <div className="contact__card__address">
                           <h3 className="contact__card__address-title">
                               Почта:
                           </h3>
                           <a href="#" className="contact__card__address-text">
                               alma.lawson@example.com
                           </a>
                       </div>
                       <a href="tel:+77777073797" className="header__number">
                           +7 (777) 707-37-97
                       </a>
                       <Button type="button" onClick={()=> setOverlay(true)} name="Оставить заявку"/>
                   </div>
               </div>
           </div>
        </section>
    );
};

export default Contact;