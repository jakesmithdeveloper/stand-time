import React from "react";

import { connect } from "react-redux";

const TimerPage = ({ mode }) => {
  return (
    <div>
      <h1>{mode}</h1>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    mode: ownProps.match.params.id,
  };
};

export default connect(mapStateToProps)(TimerPage);
