import React from "react";
import PropTypes from "prop-types";
import GamePanel from "../GamePanel/GamePanel";
import Navbar from "../../Components/Navbar";

const Main = (props) => {
  return (
    <div className="h-screen	w-full">
       <Navbar />
      <div className="flex w-full justify-center	 ">
       
        <GamePanel />
      </div>
    </div>
  );
};

Main.propTypes = {};

export default Main;
