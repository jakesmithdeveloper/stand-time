import { combineReducers } from "redux";

import darkmodeReducer from "./darkmodeReducer";
import timerTickReducer from "./timerTickReducer";

export default combineReducers({
  darkmode: darkmodeReducer,
  timers: timerTickReducer,
});
