import { Outlet } from "react-router-dom"
import Header from "../commons/Header";
import Navbar from "../commons/Navbar";
import Footer from "../commons/Footer";

const Layout = () => {
    return(
        <div>
            <Header/>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    )
}

export default Layout;