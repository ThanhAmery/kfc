import Carousel from "../../components/carousel"
import FoodList from "../../components/food-list"
import "./index.scss"

function Home() {
  return (
    <div>
      <Carousel />

      <div className="food-list__header">
        <img src="https://banner2.cleanpng.com/20190130/vqb/kisspng-colonel-sanders-kfc-fried-chicken-logo-restaurant-kentucky-fried-chicken-kfc-logo-free-vector-down-1713908782135.webp" alt=""/>
        <h3> CÓ THỂ BẠN SẼ THÍCH MÓN NÀY</h3>
      </div>
      <FoodList />
      
    </div>
  )
}

export default Home