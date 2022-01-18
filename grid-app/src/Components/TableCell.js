import React from "react";
import { ReactDOM } from "react";
import { useState } from "react";

export default function TableCell(props) {
    const [color, setColor] = useState("transparent")

    const changeColor = () => {
        setColor(props.color)
    }

    return(
        <div className="cell" onClick={changeColor} style={{backgroundColor : color}}></div>
    )
}