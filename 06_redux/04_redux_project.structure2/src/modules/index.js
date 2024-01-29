import { combineReducers } from "redux";
import userReducer from "./UserModules";
import menuReducer from "./MenuModules";

const rootReducer = combineReducers({
    userReducer,
    menuReducer
});

export default rootReducer;