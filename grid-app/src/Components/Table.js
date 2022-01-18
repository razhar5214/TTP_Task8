import React from "react";
import { ReactDOM } from "react";
import TableRow from "./TableRow"

export default function Table(props) {
    let row = props.state.row
    let column = props.state.column
    const grid = []

    for (let i = 0; i < row; i++) {
        grid.push(<TableRow column={column}></TableRow>)
    }

    return (
        <div className="grid">
            {grid}
        </div>
    )
}