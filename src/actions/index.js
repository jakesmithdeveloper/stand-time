import { TOGGLE_DARKMODE, TIMER_TICK, EDIT_TIMER, CLEAR_TIMER } from "./types";

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

export const editTimer = (amount, mode) => {
  return {
    type: EDIT_TIMER,
    payload: { amount, mode },
  };
};

export const clearTimer = (mode) => {
  return { type: CLEAR_TIMER, payload: mode };
};
