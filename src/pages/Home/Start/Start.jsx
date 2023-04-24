import Swiper from "./Swiper/Swiper";
import Button from "../Button/Button";

const Start = () => {


    return (
        <section className="start">
            <div className="container">
                <Swiper/>
                <h2 className="start__title">
                    Холодильное и тепловое <br/> оборудование «под ключ»
                </h2>
                <Button name='Заказать'/>
            </div>
        </section>
    );
};

export default Start;