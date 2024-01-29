import { getMenulist } from "../modules/MenuModules";
import { request } from "./API";

export function callGetMenuListAPI(){
    console.log("getMenuList api calls ");
    
    return async(dispatch, getState) =>{
        const result = await request("get", "/menu");
        console.log("getMenulist result : " , result);
        
        dispatch(getMenulist(result));
    }
}