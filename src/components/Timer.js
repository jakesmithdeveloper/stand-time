import React from "react";
import TimerDisplay from "./TimerDisplay";

import history from "../history";

import "../index.css";

const Timer = ({ title, seconds }) => {
  return (
    <div
      onClick={() => history.push(`/time/${title.toLowerCase()}`)}
      className="bg-brown my-6 flex flex-col items-center rounded-2xl shadow-md max-w-md sm: w-10/12 dark:bg-gray-800"
    >
      <h1 className="text-5xl mt-6 mb-6 text-dark-font dark:text-gray-300">
        {title}
      </h1>
      <img
        className="mb-5 rounded-full shadow-lg"
        src="http://www.fillmurray.com/200/200"
        alt=""
      />
      <TimerDisplay seconds={seconds} />
    </div>
  );
};

export default Timer;
