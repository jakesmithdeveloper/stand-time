import { combineReducers } from "redux";

import darkmodeReducer from "./darkmodeReducer";

export default combineReducers({
  darkmode: darkmodeReducer,
});
