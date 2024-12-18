import { toast } from "react-toastify";
import api from "../../config/api";
import { useEffect, useState } from "react";
import { FoodCategoryType } from "../../models/category";
import "./index.scss";


function FoodCategory() {

    const [foodCategory, setFoodCategory] = useState<FoodCategoryType[]>([]);
    
    const fetchFoodCategory = async() => {
        try {
            const response = await api.get("KFC");
            setFoodCategory(response.data);
        }
        catch(err){
            toast.error(err.response.data);
        }
    };

    useEffect(() => {
        fetchFoodCategory();
    },[]);

  return (
    <div className="food-category">
        {foodCategory.map((category) => (
            <div className="food-category__item" key={category.id}>
                <img src={category.image} alt="" />
                <h3>{category.name}</h3>
            </div>
        ))}
    </div>
  )
}

export default FoodCategory