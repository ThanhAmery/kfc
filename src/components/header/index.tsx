import { useLocation, useNavigate } from "react-router-dom";
import "./index.scss"
import { UserOutlined, MenuOutlined } from '@ant-design/icons';
import { useState } from "react";
import Sidebar from "../sidebar";
function Header() {

    const navigate = useNavigate();

    const location = useLocation(); // lấy ra thông tin của url hiện tại 

    const isCartPage = location.pathname === "/cart";

    const [isSidebarVisible, setSidebarVisible] = useState(false);

    const openSidebar = () => setSidebarVisible(true);
    const closeSidebar = () => setSidebarVisible(false);

    return (
      <>
        <div className={`header ${isCartPage ? "header--cart" : ""}`}> 
          <div className="header__left">
            {isCartPage ? (
              <button
                className="header__back"
                onClick={() => navigate("/")}
              >
                Quay lại menu
              </button>
              
            ) : (
              // Logo cho các trang khác
              <img
                src="https://static.kfcvietnam.com.vn/images/web/kfc-logo.svg?v=5.0"
                alt="logo"
                className="header__logo"
                width={50}
                onClick={() => navigate("/")}
              />
            )}

            {/* Navigation Links */}
            {!isCartPage && (
                <ul className="header__navigation">
                    <li>Thực đơn</li>
                    <li>Khuyến mãi</li>
                    <li>Dịch vụ tiệc</li>
                    <li onClick={() => navigate("/map-kfc")}>Hệ thống nhà hàng</li>
                </ul>
            )}
          </div>
    
          {isCartPage && (
              <img width={100} alt="logo"
              className="header__logo_cart"
              src="https://static.kfcvietnam.com.vn/images/web/kfc-logo-mobile.svg?v=5.0"
              />
          )}
          
          
            <div className="header__right">
              <div className="header__account">
                <UserOutlined
                  size={100}
                  className="icon"
                  onClick={() => navigate("/login")}
                />
              </div>

              {!isCartPage && (
              <div className="header__cart" onClick={() => navigate("/cart")}>
                <span className="number">0</span>
              </div>
              )}
    
              <div className="header__menu" onClick={openSidebar}>
                <MenuOutlined />
              </div>
            </div>       
        </div>

        <Sidebar isVisible={isSidebarVisible} onClose={closeSidebar} />
      </>
      );

//    return (
//     <div className="header">
//         <div className="header__left">
//             <img 
//             src="https://static.kfcvietnam.com.vn/images/web/kfc-logo.svg?v=5.0" 
//             alt="logo" 
//             className="header__logo" 
//             width={50}
//             onClick={() => navigate("/")}
//             />
//             <ul className="header__navigation">
//                 <li>Thực đơn</li>
//                 <li>Khuyến mãi</li>
//                 <li>Dịch vụ</li>
//                 <li>Hệ thống nhà hàng</li>

//             </ul>
//         </div>
//         <div className="header__right">

//             <div className="header__account">
//             <UserOutlined 
//             size={100} 
//             className="icon" 
//             onClick={() => navigate("/login")}/>
//             </div>

        
//             <div className="header__cart" onClick={() => navigate("/cart")}>
//                 {/* <img 
//                 src="https://i.ibb.co/C7xB7MW/Screenshot-2024-07-08-at-19-22-32-removebg-preview.png"
//                 alt="cart"
//                 className="cart__icon"
//                 width={50}
//                 /> */}
//                 <span className="number">0</span>
//             </div>

//             <div className="header__menu">
//             <MenuOutlined />
//             </div>

            
//         </div>
//     </div>
//    )
}

export default Header