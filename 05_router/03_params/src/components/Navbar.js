import { NavLink } from "react-router-dom"

const Navbar = () => {
    const ativeStyle = {
        backgroundColor: "purple",
        color:"white"
    }

    return(
        <div>
            <ul>
                <li>
                    <NavLink
                     to={"/main"}
                      style={({isActive}) => isActive ? ativeStyle:null}>
                    </NavLink>
                </li>

                <li>
                    <NavLink
                     to={"/about"}
                      style={({isActive}) => isActive ? ativeStyle:null}>
                    </NavLink>
                </li>

                <li>
                    <NavLink
                     to={"/menu"}
                      style={({isActive}) => isActive ? ativeStyle:null}>
                    </NavLink>
                </li>
            </ul>
        </div>
    )
}

export default Navbar;