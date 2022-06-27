import { combineReducers } from "redux";
import favouriteReducer from "./index";


export default combineReducers({
    favourite:favouriteReducer
})
    
