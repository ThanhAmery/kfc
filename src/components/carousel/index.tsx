import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";


import "./index.scss"; 
import { Autoplay, Navigation, } from "swiper/modules";

const Carousel: React.FC = () => { // React.FC is a generic type that is used to define the type of props that a component can accept.
  const images = [
    "https://static.kfcvietnam.com.vn/images/content/home/carousel/lg/Nuggest-99k.jpg",             // Nuggest 99k 4/2026 
    "https://static.kfcvietnam.com.vn/images/content/home/carousel/lg/LoveCombo.jpg",                // Cùng xơi cùng vui 29/4/2026
    "https://static.kfcvietnam.com.vn/images/content/home/carousel/lg/6COB_April.jpg",              // 6 miếng gà chỉ 199k 29/4/2026
    "https://static.kfcvietnam.com.vn/images/content/home/carousel/lg/9COB_April.jpg",              // 9 miếng gà chỉ 259k 4/2026
    "https://static.kfcvietnam.com.vn/images/content/home/carousel/lg/Wrap.jpg",                   // Wrap xốt nhiệt đới 4/2026
    "https://static.kfcvietnam.com.vn/images/content/home/carousel/lg/Wrap_CBO.jpg",                // Wrap CBO 4/2026
    "https://static.kfcvietnam.com.vn/images/content/home/carousel/lg/Combo-tutap.jpg",             // Combo Tự Tập 4/2026
    "https://static.kfcvietnam.com.vn/images/content/home/carousel/lg/Party.jpg",                   // Đại tiệc gà giòn 4/2026
    "https://static.kfcvietnam.com.vn/images/content/home/carousel/lg/BO_April.jpg",                // Đặt đơn lớn, ưu đãi to 4/2026



    // "https://static.kfcvietnam.com.vn/images/content/home/carousel/lg/DoubleDay.webp?v=3J89N4",    //Christmas: 2024
    // "https://static.kfcvietnam.com.vn/images/content/home/carousel/lg/NgotNgao.webp?v=B415a4",        //Ngọt ngào: Ngày lễ tình nhân 14/2/2025
    // "https://static.kfcvietnam.com.vn/images/content/home/carousel/lg/Combo0803.webp?v=3x6Yv4",       //Deal yêu thương, Mừng 8/3/2025
    // "https://static.kfcvietnam.com.vn/images/content/home/carousel/lg/GWP.webp?v=3x6Yv4",            //Ăn thả ga, Quà cực đã
    // "https://static.kfcvietnam.com.vn/images/content/home/carousel/lg/Chizza.webp?v=46KM9g",          //Chizza 2025 
    // "https://static.kfcvietnam.com.vn/images/content/home/carousel/lg/ComboTet.webp?v=3QjJEL",        //combo Tết 2025
    // "https://static.kfcvietnam.com.vn/images/content/home/carousel/lg/Voucher.webp?v=4BoXag",         //Lì xì bạn mới 
    //  "https://static.kfcvietnam.com.vn/images/content/home/carousel/lg/ComboSting.webp?v=gbm184",  //combo có sting 
    // "https://static.kfcvietnam.com.vn/images/content/home/carousel/lg/Festive.webp?v=gbm184",         //Đại tiệc gà giòn 
    // "https://static.kfcvietnam.com.vn/images/content/home/carousel/lg/Dinner-Dec.webp?v=gbm184",   //combo gia đình 
    // "https://static.kfcvietnam.com.vn/images/content/home/carousel/lg/TNAGP4.webp?v=K4P1bg",          //Trưa nay ăn gì 
    // "https://static.kfcvietnam.com.vn/images/content/home/carousel/lg/DealTA.webp?v=3J89N4",          //Tặng ngay cho đơn hàng từ 170k
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


