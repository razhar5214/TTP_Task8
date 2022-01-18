import React from "react";
import { ReactDOM } from "react";
import { useState } from "react";

// export default class TableCell extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             color: ""
//         }
//     }

//     handleClick() {
//         // this.setState({ color: this.state.color })
//     }

//     render() {
//         return (
//             <div className="cell" style={{ backgroundColor: this.state.color }} onClick={this.handleClick}></div >
//         )
//     }
// }
export default function TableCell(props) {
    const [color, setColor] = useState("transparent")

    const changeColor = () => {
        setColor(color = props.color)
    }

    return(
        <div className="cell" onClick={changeColor} style={{backgroundColor : color}}></div>
    )
}