import { Food } from "../../models/food";
import "./index.scss";

interface CardProps {
    food: Food;
}

function Card({ food }: CardProps) {

    const { name, description, image, id, price } = food;


    const formatPrice = (price: number): string => {
      return new Intl.NumberFormat("vi-VN", {
        style: "currency",
        currency: "VND",
        minimumFractionDigits: 0, // Bỏ phần thập phân
      }).format(price);
    };


  return (
    <div className="food-card">

        <img src={food.image} alt="" />

        <div className="food-card__content">
          <div className="food-card__information">
              <span>{name}</span>
              <span>{formatPrice(price)}</span>
          </div>

          <p className="description">
            {description.substring(0, 100)}
            {description.length > 100 && "..."}
            {/* true + false => false
                false + true => false 
            */}
          </p> 
          <button>Thêm</button>
        </div>
        
        
    </div>
  )
}

export default Card