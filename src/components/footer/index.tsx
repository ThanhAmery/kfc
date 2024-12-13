import "./index.scss";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        {/* Danh mục món ăn */}
        <div className="footer__column">
          <h4>Danh Mục Món Ăn</h4>
          <ul>
            <li>Ưu Đãi</li>
            <li>Món Mới</li>
            <li>Combo 1 Người</li>
            <li>Combo Nhóm</li>
            <li>Gà Rán - Gà Quay</li>
            <li>Burger - Cơm - Mì Ý</li>
            <li>Thức Ăn Nhẹ</li>
            <li>Thức Uống & Tráng Miệng</li>
          </ul>
        </div>

        {/* Về KFC */}
        <div className="footer__column">
          <h4>Về KFC</h4>
          <ul>
            <li>Câu Chuyện Của Chúng Tôi</li>
            <li>Tin Khuyến Mãi</li>
            <li>Tin Tức KFC</li>
            <li>Tuyển Dụng</li>
            <li>Đặt Tiệc Sinh Nhật</li>
            <li>Đơn Lớn Giá Hời</li>
          </ul>
        </div>

        {/* Liên hệ KFC */}
        <div className="footer__column">
          <h4>Liên hệ KFC</h4>
          <ul>
            <li>Theo Dõi Đơn Hàng</li>
            <li>Hệ Thống Nhà Hàng</li>
            <li>Liên Hệ KFC</li>
          </ul>
        </div>

        {/* Chính sách */}
        <div className="footer__column">
          <h4>Chính sách</h4>
          <ul>
            <li>Chính sách hoạt động</li>
            <li>Chính sách và quy định</li>
            <li>Chính sách bảo mật thông tin</li>
          </ul>
        </div>

        {/* Download App */}
        <div className="footer__column">
          <h4>Download App</h4>
          <div className="footer__app-links">
            <img src="https://static.kfcvietnam.com.vn/images/web/logo_appstore.png" alt="App Store" />
            <img src="	https://static.kfcvietnam.com.vn/images/web/logo_playstore.png" alt="Google Play" />
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <p>
          Công Ty Liên Doanh TNHH KFC Việt Nam <br />
          Số 292 Bà Triệu, P. Lê Đại Hành, Q. Hai Bà Trưng, TP. Hà Nội <br />
          Điện thoại: (028) 38489828 <br />
          Email: lienhe@kfcvietnam.com.vn <br />
          Mã số thuế: 0100773885 - Ngày cấp: 29/10/1998 - Nơi cấp: Cục Thuế
          Thành Phố Hà Nội
        </p>
        <p>© 2024 KFC Vietnam</p>
        <div className="footer__social-icons">
          <i className="fab fa-facebook-f"></i>
          <i className="fab fa-instagram"></i>
          <i className="fab fa-youtube"></i>
          <i className="fab fa-twitter"></i>
        </div>
      </div>
    </footer>
  );
}

export default Footer;



// function Footer() {
//   return (
//     <div>Footer</div>
//   )
// }

// export default Footer