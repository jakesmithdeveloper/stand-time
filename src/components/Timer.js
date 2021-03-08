import React, { useState } from "react";
import { connect } from "react-redux";
import TimerDisplay from "./TimerDisplay";

import history from "../history";
import { editTimer, clearTimer } from "../actions";

import "../index.css";

const Timer = ({ title, seconds, editTimer, clearTimer }) => {
  const [editMode, setEditMode] = useState(false);

  const renderMode = editMode ? (
    <div className="w-full my-2 flex flex-col items-center">
      <div className="w-full flex justify-center space-x-4 sm: px-4">
        <button
          onClick={() => editTimer(-5, title)}
          className="text-3xl w-1/6 border-2 rounded-full p-2 border-dark-font text-dark-font dark:text-gray-100 dark:border-gray-400"
        >
          -5
        </button>
        <button
          onClick={() => editTimer(-1, title)}
          className="text-3xl w-1/6 border-2 rounded-full p-2 border-dark-font text-dark-font dark:text-gray-100 dark:border-gray-400"
        >
          -1
        </button>
        <button
          className="text-2xl w-1/5 rounded-full tracking-wider text-dark-font dark:text-gray-100 dark:bg-blue-sea"
          onClick={() => setEditMode(false)}
        >
          done
        </button>
        <button
          onClick={() => editTimer(1, title)}
          className="text-3xl w-1/6 border-2 rounded-full p-2 border-dark-font text-dark-font dark:text-gray-100 dark:border-gray-400"
        >
          +1
        </button>
        <button
          onClick={() => editTimer(5, title)}
          className="text-3xl w-1/6 border-2 rounded-full p-2 border-dark-font text-dark-font dark:text-gray-100 dark:border-gray-400"
        >
          +5
        </button>
      </div>
      <button
        onClick={() => clearTimer(title)}
        className="dark:bg-red-600 text-red-700 text-2xl w-1/6 py-3 rounded-full tracking-wider  dark:text-gray-100 mt-2"
      >
        clear
      </button>
    </div>
  ) : (
    <button
      onClick={(e) => {
        e.stopPropagation();
        setEditMode(true);
      }}
      className="my-6 text-xl text-dark-font tracking-widest dark:text-gray-100"
    >
      edit
    </button>
  );

  return (
    <div
      onClick={() => {
        if (!editMode) history.push(`/time/${title.toLowerCase()}`);
      }}
      className="bg-brown my-6 flex flex-col items-center rounded-2xl shadow-md max-w-md sm: w-10/12 dark:bg-gray-800"
    >
      <div className="flex-grow"></div>
      <h1 className="text-5xl mt-6 mb-6 text-dark-font dark:text-gray-300 flex-grow">
        {title}
      </h1>
      <img
        className="mb-5 rounded-full shadow-lg"
        src="http://www.fillmurray.com/200/200"
        alt=""
      />
      <TimerDisplay seconds={seconds} editMode={editMode} />
      {renderMode}
    </div>
  );
};

export default connect(null, { editTimer, clearTimer })(Timer);
