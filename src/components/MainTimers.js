import React, { useEffect } from "react";
import { connect } from "react-redux";

import Images from "../images/images";
import { secondsToDisplay } from "../helpFunctions";
import Timer from "./Timer";
import { toggleDarkmode } from "../actions";

const MainTimers = ({ sit, stand, toggleDarkmode, darkmode }) => {
  useEffect(() => {
    document.title = `↓ ${secondsToDisplay(sit)} | ↑ ${secondsToDisplay(
      stand
    )}`;
  }, [sit, stand]);

  return (
    <div className="flex flex-col items-center">
      <div className="flex items-center">
        <img
          src={darkmode ? Images.tableDark : Images.tableBlack}
          alt=""
          className="max-w-logo-small md:max-w-logo-large"
        />
        <h1 className="text-royal-purple py-4 tracking-widest dark:text-gray-100 ml-3 text-4xl md:text-6xl">
          Stand Time
        </h1>
        <img
          src={darkmode ? Images.chairDark : Images.chairBlack}
          alt=""
          className="max-w-logo-small md:max-w-logo-large"
        />
      </div>
      <button
        onClick={toggleDarkmode}
        className="text-gray-100 bg-gray-800 h-8 rounded-full w-20 dark:bg-light-font"
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
    darkmode: state.darkmode.darkmode,
  };
};

export default connect(mapStateToProps, { toggleDarkmode })(MainTimers);
