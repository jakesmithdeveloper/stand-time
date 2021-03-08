import { TIMER_TICK, EDIT_TIMER, CLEAR_TIMER } from "../actions/types";

const INITIAL_STATE = {
  sit: 0,
  stand: 0,
};

const timerReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TIMER_TICK:
      if (action.payload === "sit") {
        return { ...state, sit: state.sit + 1 };
      }
      return { ...state, stand: state.stand + 1 };
    case EDIT_TIMER:
      if (action.payload.mode.toLowerCase() === "sit") {
        const newVal = state.sit + action.payload.amount * 60;
        return { ...state, sit: newVal < 0 ? 0 : newVal };
      }
      const newVal = state.stand + action.payload.amount * 60;
      return { ...state, stand: newVal < 0 ? 0 : newVal };
    case CLEAR_TIMER:
      if (action.payload.toLowerCase() === "sit") {
        return { ...state, sit: 0 };
      }
      return { ...state, stand: 0 };
    default:
      return state;
  }
};

export default timerReducer;
