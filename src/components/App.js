import React from "react";
import { Router, Route } from "react-router-dom";
import { connect } from "react-redux";

import MainTimers from "./MainTimers";
import TimerPage from "./TimerPage";

import history from "../history";

import "../index.css";

const App = (props) => {
  const renderMode = props.darkmode ? "dark" : "";

  return (
    <div className={renderMode}>
      <Router history={history}>
        <Route path="/" exact component={MainTimers} />
        <Route path="/sit" exact component={TimerPage} />
        <Route path="/stand" exact component={TimerPage} />
      </Router>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    darkmode: state.darkmode.darkmode,
  };
};

export default connect(mapStateToProps)(App);
