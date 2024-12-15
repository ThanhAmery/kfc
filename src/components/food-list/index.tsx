import { useEffect, useState } from "react";
import { Food } from "../../models/food";
import api from "../../config/api";
import { toast } from "react-toastify";
import Card from "../card";
import "./index.scss";

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
        {foods.map((food) => (
            <Card food={food} key={food.id} />
        ))}

    </div>
  )
}

export default FoodList