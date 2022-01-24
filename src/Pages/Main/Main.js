import React, { useContext } from "react";
import PropTypes from "prop-types";
import GamePanel from "../GamePanel/GamePanel";
import Navbar from "../../Components/Navbar";
import { AppContext } from "../../Contexts/AppContext";

const Main = () => {
    const {themeColor} = useContext(AppContext)

  return (
    <div className="h-screen	w-full ">
      <Navbar />
      <div className="flex w-full justify-center">
        <GamePanel themeColor={themeColor} />
      </div>
    </div>
  );
};

Main.propTypes = {};

export default Main;
