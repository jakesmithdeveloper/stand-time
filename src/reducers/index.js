import { combineReducers } from "redux";

import darkmodeReducer from "./darkmodeReducer";
import timerReducer from "./timerReducer";

export default combineReducers({
  darkmode: darkmodeReducer,
  timers: timerReducer,
});
