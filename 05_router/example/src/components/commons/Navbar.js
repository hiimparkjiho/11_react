import { NavLink } from "react-router-dom";

const Navbar = () => {
    return(
        <div>
            <h2>랜덤으로 고양이 사진 생성</h2>
            <NavLink to="/one">한마리</NavLink>
            <NavLink to="/ten">열마리</NavLink>
            <NavLink to="/five">다섯마리</NavLink>
        </div>
    )
}

export default Navbar;