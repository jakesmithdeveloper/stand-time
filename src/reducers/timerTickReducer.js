import { TIMER_TICK } from "../actions/types";

const INITIAL_STATE = {
  sit: 0,
  stand: 0,
};

const timerTickReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TIMER_TICK:
      if (action.payload === "sit") {
        return { ...state, sit: state.sit + 1 };
      }

      return { ...state, stand: state.stand + 1 };
    default:
      return state;
  }
};

export default timerTickReducer;
