import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

import MainTimers from "./MainTimers";
import TimerPage from "./TimerPage";

import history from "../history";

import "../index.css";

const App = (props) => {
  const renderMode = props.darkmode ? "dark" : "";

  return (
    <div className={renderMode} style={{ height: "100%" }}>
      <div className="dark:bg-gray-900 bg-blue-sea h-full">
        <Router history={history}>
          <Switch>
            <Route path="/" exact component={MainTimers} />
            <Route path="/time/:id" exact component={TimerPage} />
          </Switch>
        </Router>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    darkmode: state.darkmode.darkmode,
  };
};

export default connect(mapStateToProps)(App);
