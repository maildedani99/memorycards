import React, { useState } from "react";
import "./card.css";
import PropTypes from "prop-types";

const Card = ({matched, image}) => {

    const [rotated, setRotated] = useState(false)

    return (
            <div className={matched ? "carta-box-matched rounded-lg" : "carta-box"} onClick={() => setRotated(!rotated)}>
                <div className={!rotated ? "carta" : "carta rotation"}>
                    <div className="cara bg-cyan-500 rounded-lg	" style={{ width: "200px", height: "250px", borderRadius: "0.5rem" }} >
                        {/*  <img src={cardBack} alt="Front Face" width="200" height="250px" /> */}
                    </div>
                    <div className="cara detras " style={{ width: "200px", height: "250px" }}>
                        <img src={image} alt="Back Face" style={{ width: "200px", height: "250px", borderRadius: "0.5rem" }} />
                    </div>
                </div>
            </div>
    )
}

Card.propTypes = {};

export default Card;