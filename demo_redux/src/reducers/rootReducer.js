import hobbyReducer from "./hobbyReducer";
import userReducer from "./userReducer";
import {combineReducers} from "redux";

//rootReducer is a combination of all reducer in app
const rootReducer = combineReducers({
    hobby: hobbyReducer,
    user: userReducer,
});

export default rootReducer;