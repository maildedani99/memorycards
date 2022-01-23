import React, { useState } from "react";
import PropTypes from "prop-types";
import Card from "../../Components/Card";
import UseGamePanel from "./UseGamePanel";

const GamePanel = (props) => {
    const [matched, setMatched] = useState(false);
    const { imgArray } = UseGamePanel();
    console.log(imgArray);
    return (
        <div className=" w-full flex flex-row">
            {imgArray.map((item) => (
                <Card matched={matched} image={item} />
            ))}
          
        </div>
    );
};

GamePanel.propTypes = {};

export default GamePanel;
