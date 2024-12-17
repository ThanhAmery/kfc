import { useEffect, useState } from "react";
import { Food } from "../../models/food";
import api from "../../config/api";
import { toast } from "react-toastify";
import Card from "../card";
import "./index.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

function FoodList() {

    const [foods, setFoods] = useState<Food[]>([]);

    const fetchFood = async() => {
       try {
        const response = await api.get("KFC");
        setFoods(response.data);
       }
        catch(err){
            toast.error(err.response.data);
        }
    };

    useEffect(() => {
        fetchFood();
    }, []);

  return (
    <div className="food-list">
        {/* {foods.map((food) => (
            <Card food={food} key={food.id} />
        ))} */}

        <Swiper
            modules={[Navigation, Pagination]} 
            spaceBetween={30} 
            slidesPerView={4} 
            navigation 
            pagination={{ clickable: true }} 
            loop={true} 
        >
            {foods.map((food) => (
            <SwiperSlide key={food.id}>
                <Card food={food} />
            </SwiperSlide>
            ))}
        </Swiper>

    </div>
  )
}

export default FoodList