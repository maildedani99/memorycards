import React, { useEffect, useState } from "react";
import "./card.css";
import PropTypes from "prop-types";
import UseGamePanel from "../../Pages/GamePanel/UseGamePanel";
import { useContext } from "react/cjs/react.development";
import { AppContext } from "../../Contexts/AppContext";

const Card = ({matched, item, themeColor }) => {

    const [rotated, setRotated] = useState(false)
    const {preview} = useContext(AppContext)

    const showPreview = () => {
      preview ? setRotated(true) : setRotated(false) 
    }

    useEffect(() => {
        showPreview()
    }, [preview]);
    
    

    return (
            <div className={matched ? "carta-box-matched rounded-lg " : "carta-box"} onClick={() => setRotated(!rotated)}>
                <div className={!rotated ? "carta" : "carta rotation"}>
                    <div className="rounded-lg object-cover cara" style={{ width: "100px", height: "150px", borderRadius: "0.5rem", backgroundColor:themeColor }} >
                        {/*  <img src={cardBack} alt="Front Face" width="200" height="150px" /> */}
                    </div>
                    <div className="cara detras object-cover" style={{ width: "100px", height: "150px" }}>
                        <img src={item.image} alt="Back Face" style={{ width: "100px", height: "150px", borderRadius: "0.5rem" }} />
                    </div>
                </div>
            </div>
    )
}

Card.propTypes = {};

export default Card;
