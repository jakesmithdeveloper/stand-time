import React, { useState } from "react";
import { connect } from "react-redux";
import TimerDisplay from "./TimerDisplay";

import { editTimer, clearTimer } from "../actions";
import history from "../history";
import Images from "../images/images";

import "../index.css";

const Timer = ({ title, seconds, editTimer, clearTimer }) => {
  const [editMode, setEditMode] = useState(false);
  const [shouldBounce, setShouldBounce] = useState(true);

  const renderMode = editMode ? (
    <div className="w-full my-2 flex flex-col items-center">
      <div className="w-full flex justify-center space-x-4 sm: px-4">
        <button
          onClick={() => editTimer(-5, title)}
          className=" text-3xl w-1/6 border-2 rounded-full p-2 border-dark-font text-dark-font dark:text-gray-100 dark:border-gray-400 focus:outline-none active:border-gray-100 active:text-gray-100"
        >
          -5
        </button>
        <button
          onClick={() => editTimer(-1, title)}
          className="text-3xl w-1/6 border-2 rounded-full p-2 border-dark-font text-dark-font dark:text-gray-100 dark:border-gray-400 focus:outline-none active:border-gray-100 active:text-gray-100"
        >
          -1
        </button>
        <button
          className="text-2xl w-1/5 rounded-full tracking-wider text-dark-font dark:text-gray-100 dark:bg-light-font focus:outline-none active:text-green-500"
          onClick={() => {
            setEditMode(false);
            setShouldBounce(true);
          }}
        >
          done
        </button>
        <button
          onClick={() => editTimer(1, title)}
          className="text-3xl w-1/6 border-2 rounded-full p-2 border-dark-font text-dark-font dark:text-gray-100 dark:border-gray-400 focus:outline-none active:border-gray-100 active:text-gray-100"
        >
          +1
        </button>
        <button
          onClick={() => editTimer(5, title)}
          className="text-3xl w-1/6 border-2 rounded-full p-2 border-dark-font text-dark-font dark:text-gray-100 dark:border-gray-400 focus:outline-none active:border-gray-100 active:text-gray-100"
        >
          +5
        </button>
      </div>
      <button
        onClick={() => clearTimer(title)}
        className="dark:bg-red-600 text-red-700 text-2xl w-1/6 py-3 rounded-full tracking-wider  dark:text-gray-100 mt-2 focus:outline-none active:text-red-500"
      >
        clear
      </button>
    </div>
  ) : (
    <button
      onClick={(e) => {
        e.stopPropagation();
        setEditMode(true);
        setShouldBounce(false);
      }}
      className="my-6 text-xl tracking-widest text-gray-100 bg-royal-purple dark:bg-gray-900 p-3 rounded-2xl transition-transform active:-translate-y-2 focus:outline-none"
    >
      edit
    </button>
  );

  return (
    <div
      onClick={() => {
        if (!editMode) history.push(`/time/${title.toLowerCase()}`);
      }}
      className={`${
        shouldBounce ? "transistion transform active:translate-y-2" : ""
      } bg-brown my-4 flex flex-col items-center rounded-2xl shadow-lg max-w-md sm: w-10/12 dark:bg-gray-800`}
    >
      <div className="flex-grow"></div>
      <h1 className="text-5xl mt-6 mb-6 text-dark-font dark:text-gray-300 flex-grow unselectable">
        {title}
      </h1>
      <img
        className="mb-5 rounded-2xl shadow-2xl max-w-sm sm: w-10/12 unselectable"
        src={Images[title.toLowerCase()]}
        alt=""
      />
      <TimerDisplay seconds={seconds} editMode={editMode} />
      {renderMode}
    </div>
  );
};

export default connect(null, { editTimer, clearTimer })(Timer);
