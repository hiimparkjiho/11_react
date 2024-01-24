import { NavLink } from "react-router-dom"

const Navbar = () => {

    return(
        <div>
            <ul>
                <li>
                    <NavLink to={"/main"}></NavLink>
                    <NavLink to={"/detail"}></NavLink>
                </li>
            </ul>
        </div>
    )
}

export default Navbar;