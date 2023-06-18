import Button from "../../../components/Button/Button";
import React, {useContext} from "react";
import Swiper from "./Swiper/Swiper";
import {useSelector} from "react-redux";
import {userSelector} from "../../../redux/reselector";
import {CustomContext} from "../../../utils/Context";
import {useNavigate} from "react-router-dom";

const Start = () => {

    const { user } = useSelector(userSelector);
    const {setOverlay} = useContext(CustomContext);
    const navigate = useNavigate();


    return (
        <section className="start">
            <div className="container">
                <Swiper/>
                <h2 className="start__title">
                    Холодильное и тепловое <br/> оборудование «под ключ»
                </h2>
                <Button onClick={()=>{
                    if (user!==undefined){
                        navigate('/catalog')
                    } else{
                        setOverlay(true)
                    }
                }} name='Заказать'/>
            </div>
        </section>
    );
};

export default Start;