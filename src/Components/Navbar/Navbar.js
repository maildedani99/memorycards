import React, { useContext } from "react";
import PropTypes from "prop-types";
import { AppContext } from "../../Contexts/AppContext";

const Navbar = () => {

    const {themeColor, SetThemeColor} = useContext(AppContext)
  return (
    <div className="h-1/6" style={{ background: themeColor }}>
      <label for="picker">Seleciona Color</label>
      <input
        type="color"
        name="picker"
        id="picker"
        onChange={(e) => SetThemeColor(e.target.value)}
      />
    </div>
  );
};

Navbar.propTypes = {};

export default Navbar;
