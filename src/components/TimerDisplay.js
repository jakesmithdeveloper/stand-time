import React from "react";
import { secondsToDisplay } from "../helpFunctions";

import "../index.css";

const TimerDisplay = ({ seconds }) => {
  return (
    <input
      className="bg-dark-font text-gray-300 mb-8 w-1/2 h-10 rounded-full text-center text-3xl dark:bg-gray-900"
      type="text"
      defaultValue={secondsToDisplay(seconds)}
      value={secondsToDisplay(seconds)}
    />
  );
};

export default TimerDisplay;
