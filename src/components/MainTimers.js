import React, { useEffect } from "react";
import { connect } from "react-redux";

import Header from "./Header";
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
      <Header />
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
