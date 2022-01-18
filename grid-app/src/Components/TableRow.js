import React from "react";
import { ReactDOM } from "react";
import TableCell from "./TableCell"

export default function TableRow(props) {
    const column = props.column
    const color = props.color
    const grid = []

    for (let i = 0; i < column; i ++) {
        grid.push(<TableCell color={color}></TableCell>)
    }

    return (
        <div className="row">
            {grid}
        </div>
    )
}