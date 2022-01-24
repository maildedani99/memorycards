import React, { useState } from "react";
import PropTypes from "prop-types";
import Card from "../../Components/Card";
import UseGamePanel from "./UseGamePanel";

const GamePanel = ({ themeColor }) => {
  const [matched, setMatched] = useState(false);
  const { imgArray } = UseGamePanel();
  return (
    <div className=" w-4/6 h-5/6 flex flex-row flex-wrap justify-around ">
      {imgArray.map((item) => (
        <div className="w-1/6  mt-8 ">
          <div className="" style={{ width: "100px", height: "150px" }}>
            <Card matched={matched} image={item} themeColor={themeColor} />
          </div>
        </div>
      ))}
    </div>
  );
};

GamePanel.propTypes = {};

export default GamePanel;
