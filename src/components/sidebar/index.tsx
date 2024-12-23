import { CloseOutlined } from "@ant-design/icons";
import "./index.scss";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";


interface SidebarProps { 
    isVisible: boolean;
    onClose: () => void;
}


function Sidebar({ isVisible, onClose }: SidebarProps) {

  useEffect(() => {
    if (isVisible) {
        document.body.style.overflow = "hidden";
    } else {
        document.body.style.overflow = "auto";
    }
  }, [isVisible]);

  return (
    <div className={`sidebar ${isVisible ? "sidebar--visible" : ""}`}>
        <div className="sidebar__header">
        <div className="sidebar__logo">
          <img width={100}
            src="https://static.kfcvietnam.com.vn/images/web/kfc-logo.svg?v=5.0"
            alt="KFC Logo"
          />
        </div>
        <CloseOutlined className="sidebar__close" onClick={onClose} />
        </div>

        <div className="sidebar__content">
        <ul className="sidebar__menu">
          <li className="sidebar__section">DANH MỤC MÓN ĂN</li>
          <li>Ưu Đãi</li>
          <li>Món Mới</li>
          <li>Combo 1 Người</li>
          <li>Combo Nhóm</li>
          <li>Gà Rán - Gà Quay</li>
          <li>Burger - Cơm - Mì Ý</li>
          <li>Thức Ăn Nhẹ</li>
          <li>Thức Uống & Tráng Miệng</li>

          <li className="sidebar__section">VỀ KFC</li>
          <li>Câu Chuyện Của Chúng Tôi</li>
          <li>Tin Khuyến Mãi</li>
          <li>Tin tức KFC</li>
          <li>Tuyển dụng</li>
          <li>Đặt tiệc Sinh nhật</li>
          <li>Đơn Lớn Giá Hời</li>

          <li className="sidebar__section">LIÊN HỆ KFC</li>
          <li>Theo dõi đơn hàng</li>
          <li>Liên hệ KFC</li>

          <li className="sidebar__section">CHÍNH SÁCH</li>
          <li>Chính sách hoạt động</li>
          <li>Chính sách và quy định</li>
          <li>Chính sách bảo mật thông tin</li>
        </ul>


        <div className="sidebar__footer">
        <div className="sidebar__social">
          <FontAwesomeIcon className="" icon={faFacebookF} />
          <FontAwesomeIcon className="" icon={faInstagram} />
          <FontAwesomeIcon className="" icon={faYoutube} />
          <FontAwesomeIcon className="" icon={faTwitter} />
        </div>
        <p>Copyright © 2024 KFC Vietnam</p>
      </div>
      </div>
      

    </div>
  )
}

export default Sidebar