import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

import MainTimers from "./MainTimers";
import TimerPage from "./TimerPage";
import { Helmet } from "react-helmet";

import history from "../history";

import "../index.css";

const App = ({ darkmode }) => {
  const renderMode = darkmode ? "dark" : "";

  return (
    <div className={`${renderMode} h-screen`}>
      <Helmet>
        <html className="h-scren"></html>
        <body
          className={`${darkmode ? "bg-gray-900" : "bg-blue-sea"} h-screen`}
        ></body>
      </Helmet>
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
