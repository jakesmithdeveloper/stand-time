import { TOGGLE_DARKMODE, TIMER_TICK } from "./types";

export const toggleDarkmode = () => {
  return {
    type: TOGGLE_DARKMODE,
  };
};

export const timerTick = (timerId) => {
  return {
    type: TIMER_TICK,
    payload: timerId,
  };
};
