import React, { useEffect } from "react";
import { connect } from "react-redux";

import { secondsToDisplay } from "../helpFunctions";
import Timer from "./Timer";
import { toggleDarkmode } from "../actions";

const MainTimers = ({ sit, stand, toggleDarkmode }) => {
  useEffect(() => {
    document.title = `↓ ${secondsToDisplay(sit)} | ↑ ${secondsToDisplay(
      stand
    )}`;
  }, [sit, stand]);

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-gray-100 text-4xl py-4 tracking-wider">Stand Time</h1>
      <button
        onClick={toggleDarkmode}
        className="text-gray-100 bg-gray-800 px-4 py-2 rounded-full w-20 dark:bg-blue-sea"
      >
        Toggle
      </button>
      <Timer title="Sit" seconds={sit} />
      <Timer title="Stand" seconds={stand} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    sit: state.timers.sit,
    stand: state.timers.stand,
  };
};

export default connect(mapStateToProps, { toggleDarkmode })(MainTimers);
