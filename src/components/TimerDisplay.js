import React from "react";

import "../index.css";

const TimerDisplay = () => {
  return (
    <input
      className="bg-dark-font text-gray-100 mb-8 w-1/2 h-10 rounded-full text-center text-3xl"
      type="text"
      defaultValue="00:00:00"
    />
  );
};

export default TimerDisplay;
