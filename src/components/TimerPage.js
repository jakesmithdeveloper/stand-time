import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { timerTick } from "../actions";
import { secondsToDisplay } from "../helpFunctions";

import "../index.css";

const TimerPage = ({ mode, timerValue, timerTick }) => {
  useEffect(() => {
    const interval = setInterval(() => {
      timerTick(mode);
    }, 1000);

    return () => clearInterval(interval);
  }, [mode, timerTick]);

  const timerPageConfig = {
    title:
      mode === "sit"
        ? "You have been sitting for"
        : "You have been standing for",
  };

  return (
    <div className="flex flex-col items-center">
      <div className="max-w-md bg-brown flex flex-col items-center p-12 rounded-3xl dark:bg-gray-800 sm: w-11/12 sm: mt-10">
        <h3 className="text-6xl text-center my-4 mx text-dark-font dark:text-gray-300">
          {timerPageConfig.title}
        </h3>
        <input
          className="bg-dark-font text-gray-300 my-10 w-11/12 h-24 rounded-full text-center text-6xl dark:bg-gray-900"
          type="text"
          defaultValue={secondsToDisplay(timerValue)}
          value={secondsToDisplay(timerValue)}
        />
      </div>
      <Link
        to="/"
        className="bg-brown w-60 text-dark-font text-4xl text-center rounded-full mt-5 py-6 dark:bg-gray-800 dark:text-gray-300"
      >
        Back
      </Link>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    mode: ownProps.match.params.id,
    timerValue: state.timers[ownProps.match.params.id],
  };
};

export default connect(mapStateToProps, { timerTick })(TimerPage);
