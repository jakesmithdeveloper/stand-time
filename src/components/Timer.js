import React from "react";
import TimerDisplay from "./TimerDisplay";

import "../index.css";

const Timer = ({ title }) => {
  return (
    <div className="bg-brown my-14 flex flex-col items-center rounded-2xl shadow-md max-w-md mx-auto sm: w-10/12">
      <h1 className="text-5xl mt-6 mb-6 text-dark-font">{title}</h1>
      <img
        className="mb-5 rounded-full shadow-lg"
        src="http://www.fillmurray.com/200/200"
        alt=""
      />
      <TimerDisplay />
    </div>
  );
};

export default Timer;
