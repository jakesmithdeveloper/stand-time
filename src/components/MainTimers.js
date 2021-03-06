import React from "react";
import { connect } from "react-redux";

import Timer from "./Timer";
import { toggleDarkmode } from "../actions";

const MainTimers = (props) => {
  return (
    <div>
      <div
        className="dark:bg-gray-900 bg-blue-sea flex flex-col items-center"
        style={{ height: "100vh" }}
      >
        <h1 className="text-gray-100 text-4xl py-4 tracking-wider">
          Stand Stopwatch
        </h1>
        <button
          onClick={props.toggleDarkmode}
          className="text-gray-100 bg-gray-800 px-4 py-2 rounded-full w-20 dark:bg-blue-sea"
        >
          Toggle
        </button>
        <Timer title="Sit" />
        <Timer title="Stand" />
      </div>
    </div>
  );
};

export default connect(null, { toggleDarkmode })(MainTimers);
