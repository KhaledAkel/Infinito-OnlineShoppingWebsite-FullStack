import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import { sliderData } from "../data/slider";
import SliderCard from "./SliderCard";
import Category from "./Category";

function Hero() {


    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000
        };

  return (
    <div>
        <div className="w-full mx-auto bg-gradient-to-r from-cyan-500 to-blue-500 mt-4 rounded-lg">
            <Slider {...settings}>
                {sliderData.map((item) => (
                    <SliderCard key={item.id} par={item.par} img={item.image} />
                ))}

            </Slider>
        </div>
        <Category />
    </div>
    
  )
}

export default Hero


