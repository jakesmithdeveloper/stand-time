import React from "react";
import { secondsToDisplay } from "../helpFunctions";

import "../index.css";

const TimerDisplay = ({ seconds }) => {
  return (
    <input
      className="bg-dark-font text-gray-300 mb-2 w-2/3 h-20 rounded-full text-center text-5xl dark:bg-gray-900"
      type="text"
      defaultValue={secondsToDisplay(seconds)}
      value={secondsToDisplay(seconds)}
      readOnly
    />
  );
};

export default TimerDisplay;
