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
          className="max-w-logo-small md:max-w-logo-large unselectable"
        />
        <h1 className="text-royal-purple py-4 tracking-widest dark:text-gray-100 ml-3 text-4xl md:text-6xl unselectable">
          Stand Time
        </h1>
        <img
          src={darkMode ? Images.chairDark : Images.chairBlack}
          alt=""
          className="max-w-logo-small md:max-w-logo-large unselectable"
        />
      </div>
      <div>
        <label for="toogleA" class="flex items-center cursor-pointer">
          <div className="mr-3  text-dark-font dark:text-gray-100 tracking-widest">
            Light
          </div>
          <div class="relative">
            <input
              id="toogleA"
              type="checkbox"
              class="hidden"
              checked={darkMode}
              onClick={toggleDarkmode}
            />

            <div class="toggle__line w-10 h-4 bg-gray-400 rounded-full shadow-inner"></div>

            <div class="toggle__dot absolute w-6 h-6 bg-gray-800 rounded-full shadow inset-y-0 left-0"></div>
          </div>
          <div class="ml-3 text-dark-font font-medium dark:text-gray-100 tracking-widest">
            dark
          </div>
        </label>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    darkMode: state.darkmode.darkmode,
  };
};

export default connect(mapStateToProps, { toggleDarkmode })(Header);
