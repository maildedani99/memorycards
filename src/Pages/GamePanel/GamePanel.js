import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Card from "../../Components/Card";
import UseGamePanel from "./UseGamePanel";

const GamePanel = ({ themeColor }) => {

  const {
    animals,
      } = UseGamePanel()



  const [matched, setMatched] = useState(false);
  const [array, setArray] = useState([])

  const shuffleArray = () => {
    let gameArray = animals.concat(animals)
    gameArray.sort(()=> Math.random() - 0.5);
    setArray(gameArray)
    console.log(gameArray)
}

useEffect(() => {
  shuffleArray()
}, []);

  return (
    <div className=" w-4/6 h-5/6 flex flex-row flex-wrap justify-around ">
      {array.map((item) => (
        <div className="w-1/6  mt-8 ">
          <div className="" style={{ width: "100px", height: "150px" }}>
            <Card matched={matched} item={item} themeColor={themeColor}  />
          </div>
        </div>
      ))}
    </div>
  );
};

GamePanel.propTypes = {};

export default GamePanel;
