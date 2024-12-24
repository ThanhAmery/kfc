import { Input } from "antd"
import "./index.scss"


function Restaurants() {
  return (
    <div className="restaurants">
      <div className="input-search">
        <Input placeholder="Nhập địa chỉ của bạn" />
      </div>
      <img
        src="https://i.imgur.com/AqAVrJO.png"
        alt=""
      />
    </div>
  )
}

export default Restaurants