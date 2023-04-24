import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";
import back1 from '../../../assets/startBck.png'

export default function App() {
    return (
        <>
            <Swiper loop={true} autoplay={{delay:3000}} speed={2000} pagination={true} modules={[Pagination, Autoplay]} className="mySwiper">
                <SwiperSlide><img src={back1} alt=""/></SwiperSlide>
                <SwiperSlide><img src={back1} alt=""/></SwiperSlide>
                <SwiperSlide><img src={back1} alt=""/></SwiperSlide>
                <SwiperSlide><img src={back1} alt=""/></SwiperSlide>
            </Swiper>
        </>
    );
}