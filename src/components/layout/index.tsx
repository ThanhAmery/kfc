import { Outlet } from "react-router-dom"
import Header from "../header"
import Footer from "../footer"


function Layout() {
  return (
   <>
        <Header />

        {/* content of page */}
        <Outlet />

        
        <Footer />
   </>
  )
}

export default Layout