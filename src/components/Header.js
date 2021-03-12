import React from "react";

import { connect } from "react-redux";
import { toggleDarkmode } from "../actions";
import Images from "../images/images";

const Header = ({ toggleDarkmode, darkMode }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex items-center">
        <img
          src={darkMode ? Images.tableDark : Images.tableBlack}
          alt=""
          className="max-w-logo-small md:max-w-logo-large"
        />
        <h1 className="text-royal-purple py-4 tracking-widest dark:text-gray-100 ml-3 text-4xl md:text-6xl">
          Stand Time
        </h1>
        <img
          src={darkMode ? Images.chairDark : Images.chairBlack}
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
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    darkMode: state.darkmode.darkmode,
  };
};

export default connect(mapStateToProps, { toggleDarkmode })(Header);
