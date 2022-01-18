import React from "react";
import { ReactDOM } from "react";
import TableRow from "./TableRow"

export default function Table(props) {
    const row = props.state.row
    const column = props.state.column
    const color = props.state.color
    const grid = []

    for (let i = 0; i < row; i++) {
        grid.push(<TableRow column={column} color={color}></TableRow>)
    }

    return (
        <div className="grid">
            {grid}
        </div>
    )
}