import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import { getMenuList } from "../api/MenuApi";
import boxStyle from "./Menu.module.css";
import MenuItem from "../components/MenuItem";

const Menu = () => {
    const [menuList, setMenuListt] = useState([]);
    const [searchValue, setSearchValue] = useState("");
    const navigate = useNavigate();

    useEffect(
        ()=>{
            setMenuListt(getMenuList);
        },[]
    );

    const onClickHandler = () => {
        navigate(`/menu/search?menuName=${searchValue}`);
    }

    return(
        <>
            <h1>판매 메뉴 목록</h1>
            <div>
                <input type="search" name="menuName" onChange={e => {setSearchValue(e.target.value)}}/>
                <button onClick={onClickHandler}>검색</button>
            </div>
            <div className={boxStyle.MenuBox}>
                {menuList.map( menu => <MenuItem key={menu.menuCode} menu={menu}/>)}
            </div>
        </>
    )
}

export default Menu;