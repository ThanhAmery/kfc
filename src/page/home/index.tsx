import Carousel from "../../components/carousel"
import FoodCategory from "../../components/food-category"
import FoodList from "../../components/food-list"
import "./index.scss"


function Home() {
  return (
    <div>
      <Carousel />
      <div className="food-list__header">
        <img src="https://banner2.cleanpng.com/20190130/vqb/kisspng-colonel-sanders-kfc-fried-chicken-logo-restaurant-kentucky-fried-chicken-kfc-logo-free-vector-down-1713908782135.webp" alt=""/>
        <h3>DANH MỤC MÓN ĂN</h3>
      </div>
      <FoodCategory />

      <div className="food-list__header">
        <img src="https://banner2.cleanpng.com/20190130/vqb/kisspng-colonel-sanders-kfc-fried-chicken-logo-restaurant-kentucky-fried-chicken-kfc-logo-free-vector-down-1713908782135.webp" alt=""/>
        <h3>CÓ THỂ BẠN SẼ THÍCH MÓN NÀY</h3>
      </div>
      <FoodList />

      <div className="food-list__footer">
        <div className="food-list__footer__banner">
          <img src="https://static.kfcvietnam.com.vn/images/content/home/mobileappbanner/lg/banner.jpg?v=13JMyg" alt="" />
        </div>


        <div className="food-list__footer__social-icons">
          <img src="https://static.kfcvietnam.com.vn/images/content/home/mobileappbanner/boton-google.png" alt="" />
          <img src="https://static.kfcvietnam.com.vn/images/content/home/mobileappbanner/boton-app-store.png" alt="" />
        </div>
      </div>
    
      

    </div>
  )
}

export default Home