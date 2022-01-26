import React, { useContext } from "react";
import PropTypes from "prop-types";
import { AppContext } from "../../Contexts/AppContext";
import UseGamePanel from "../../Pages/GamePanel/UseGamePanel";

const Navbar = () => {

    const {themeColor, SetThemeColor} = useContext(AppContext)
    const {onPreview} = useContext(AppContext)
  return (
    <div className="h-1/6" style={{ background: themeColor }}>
      <input
      label="Selecciona un color"
        type="color"
        name="picker"
        onChange={(e) => SetThemeColor(e.target.value)}
      />
      <input type="button" value="Preview" onClick={onPreview} />
    </div>
  );
};

Navbar.propTypes = {};

export default Navbar;
