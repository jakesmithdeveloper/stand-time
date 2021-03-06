import { TOGGLE_DARKMODE } from "../actions/types";

const INITIAL_STATE = {
  darkmode: false,
};

const darkmodeReducer = (state = INITIAL_STATE, action) => {
  const toggledMode = !state.darkmode;

  switch (action.type) {
    case TOGGLE_DARKMODE:
      return { ...state, darkmode: toggledMode };
    default:
      return state;
  }
};

export default darkmodeReducer;
