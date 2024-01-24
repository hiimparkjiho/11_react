import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"
import boxStyle from "./Menu.module.css";
import MenuItem from "../components/MenuItem";
import { searchMenu } from "../api/MenuApi";

const MenuSearchResult = () => {

    const [search] = useSearchParams();
    const searchMenuName = search.get("menuName");
    const [menuList, setMenuList] = useState([]);
    /*
        pathVariable http:localhost/menu/30
        queryString Params http:localhost/menu?menuName="감자튀김"&menuPrice=500
    */

    useEffect(
        ()=>{
            setMenuList(searchMenu(searchMenuName));
        },[]
    )

    return(
        <>
            <h1>검색 결과</h1>
            <div className={boxStyle.menubox}>
                {menuList.map(menu => <MenuItem key={menu.menuCode} menu={menu}/>)}
            </div>
        </>
    )
}
export default MenuSearchResult;