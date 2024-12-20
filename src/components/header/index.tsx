import { useLocation, useNavigate } from "react-router-dom";
import "./index.scss"
import { UserOutlined, MenuOutlined } from '@ant-design/icons';
function Header() {

    const navigate = useNavigate();

    const location = useLocation(); // lấy ra thông tin của url hiện tại 

   return (
    <div className="header">
        <div className="header__left">
            <img 
            src="https://static.kfcvietnam.com.vn/images/web/kfc-logo.svg?v=5.0" 
            alt="logo" 
            className="header__logo" 
            width={50}
            onClick={() => navigate("/")}
            />
            <ul className="header__navigation">
                <li>Thực đơn</li>
                <li>Khuyến mãi</li>
                <li>Dịch vụ</li>
                <li>Hệ thống nhà hàng</li>

            </ul>
        </div>
        <div className="header__right">

            <div className="header__account">
            <UserOutlined 
            size={100} 
            className="icon" 
            onClick={() => navigate("/login")}/>
            </div>

        
            <div className="header__cart" onClick={() => navigate("/cart")}>
                {/* <img 
                src="https://i.ibb.co/C7xB7MW/Screenshot-2024-07-08-at-19-22-32-removebg-preview.png"
                alt="cart"
                className="cart__icon"
                width={50}
                /> */}
                <span className="number">0</span>
            </div>

            <div className="header__menu">
            <MenuOutlined />
            </div>

            
        </div>
    </div>
   )
}

export default Header