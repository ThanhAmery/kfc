import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";


import "./index.scss"; 
import { Autoplay, Navigation, } from "swiper/modules";

const Carousel: React.FC = () => { // React.FC is a generic type that is used to define the type of props that a component can accept.
  const images = [
    // "https://static.kfcvietnam.com.vn/images/content/home/carousel/lg/DoubleDay.webp?v=3J89N4",    //Christmas
    "https://static.kfcvietnam.com.vn/images/content/home/carousel/lg/Chizza.webp?v=46KM9g",          //Chizza
    "https://static.kfcvietnam.com.vn/images/content/home/carousel/lg/ComboTet.webp?v=3QjJEL",        //combo Tết
    "https://static.kfcvietnam.com.vn/images/content/home/carousel/lg/Voucher.webp?v=4BoXag",         //Lì xì bạn mới
    //  "https://static.kfcvietnam.com.vn/images/content/home/carousel/lg/ComboSting.webp?v=gbm184",  //combo có sting 
    "https://static.kfcvietnam.com.vn/images/content/home/carousel/lg/Festive.webp?v=gbm184",
    // "https://static.kfcvietnam.com.vn/images/content/home/carousel/lg/Dinner-Dec.webp?v=gbm184",   //combo gia đình 
    "https://static.kfcvietnam.com.vn/images/content/home/carousel/lg/TNAGP4.webp?v=K4P1bg",
    "https://static.kfcvietnam.com.vn/images/content/home/carousel/lg/DealTA.webp?v=3J89N4",
  ];

  return (
    <div>
      <Swiper
        modules={[Navigation, Autoplay]}
        // pagination={{ clickable: true }}
        navigation 
        autoplay={{ delay: 3000, disableOnInteraction: false, }}  // disableOnInteraction: true means that the autoplay will be stopped when the user interacts with the slider.
        
        className="carousel"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img src={image} alt={`Slide ${index + 1}`} style={{ width: "100%", height: "auto" }} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;


