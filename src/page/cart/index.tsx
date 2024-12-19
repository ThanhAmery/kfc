import "./index.scss";

function Cart() {
  return (
    <div className="cart">
        <h1>GIỎ HÀNG CỦA TÔI</h1>
        <div className="cart__item">
            <div className="cart__item__info">
              <h2>GIỎ HÀNG CỦA BẠN ĐANG TRỐNG. HÃY ĐẶT MÓN NGAY!</h2>
              <button>Bắt đầu đặt hàng</button>
            </div>
            <div className="cart__item__image">
              <img src="	https://static.kfcvietnam.com.vn/images/web/empty-cart.png?v=5.0" alt="" />
            </div>

        </div>
    </div>
  )
}

export default Cart