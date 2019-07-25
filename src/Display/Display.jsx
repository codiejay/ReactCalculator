import React from "react";
import "./Display.css";

const Display = (props) => {
    return (
        <div id="display">
            <b id="results"> {props.result} </b>
            <h1 id="calculations">{props.calculation}</h1>

        </div>
    )
}

export default Display;

