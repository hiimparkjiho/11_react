import menus from "../data/menu-detail.json";

// json 형식으로 메뉴 전체를 반환
export function getMenuList (){
    return menus;
}

// menuDetails에서 넘겨준 메뉴 코드 값과 일치하는 메뉴 객체를 반환
export function getMenuDetails(menuCode){

    // 사용자가 요청한 메뉴 코드와 일치하는 메뉴를 반환함
    return menus.filter(menu => menu.menuCode === parseInt(menuCode))[0];// filter는 반환형이 배열
}

export function searchMenu(menuName){
    return menus.filter(menu => menu.menuName.match(menuName));
}

