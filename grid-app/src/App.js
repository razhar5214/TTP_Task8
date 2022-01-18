import React from "react"
import ReactDOM from "react"
import './App.css';
import { useState } from "react"
import Table from "./Components/Table"

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      color: "transparent",
      row: 1,
      column: 1
    }
  }

  addRow = () => {
    this.setState({ row: this.state.row + 1 });
  }

  addColumn = () => {
    this.setState({ column: this.state.column + 1 });
  }

  removeRow = () => {
    this.setState({ row: this.state.row - 1 });
  }

  removeColumn = () => {
    if (this.state.column === 0) {
      this.setState({ row: this.state.row - this.state.row });
    }
    this.setState({ column: this.state.column - 1 });
  }

  changeColor = (event) => {
    this.setState({ color: event.target.value })
  }

  render() {
    return (
      <div className="App">
        <h1>GRIDS</h1>
        <div className="btn--container">
          <button className="nav--btn" onClick={this.addRow}>Add Row</button>
          <button className="nav--btn" onClick={this.addColumn}>Add Column</button>
          <button className="nav--btn" onClick={this.removeRow}>Remove Row</button>
          <button className="nav--btn" onClick={this.removeColumn}>Remove Column</button>

          <div className="colorPick">
            <label> Select Color: </label>
            <select onChange={this.changeColor}>
              <option value="transparent">Clear</option>
              <option value="red">Red</option>
              <option value="yellow">Yellow</option>
              <option value="green">Green</option>
              <option value="blue">Blue</option>
              <option value="violet">Violet</option>
              <option value="black">Black</option>
              <option value="white">White</option>
            </select>
          </div>

          <div className="display_row_col">
            <p>Rows: {this.state.row}</p>
            <p>Columns: {this.state.column}</p>
          </div>
        </div>

        <div>
          {/* <AddRow /> */}
          {/* Table.jsx could be the parent of TableRow.jsx (presentational component)
              TableRow.jsx could be the parent of TableCell.jsx (presentational component) */}
          <Table
            state={this.state}>
          </Table>
        </div>
      </div>
    )
  }
}

export default App;

// import React from "react"
// import ReactDOM from "react"
// import './App.css';
// import { useState } from "react"
// import Navbar from "./Components/Navbar"
// import Table from "./Components/Table"

// class App extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       color: "transparent",
//       row: 0,
//       column: 0
//     };
//   }

//   addRow = () => {
//     this.setState({ row: this.state.row + 1 });
//     this.appendRow(this.row);
//   }

//   addColumn = () => {
//     this.setState({ column: this.state.column + 1 });
//     this.appendColumn();
//   }

//   appendRow = (rows) => {
//     var tbl = document.getElementById('my-table'), // table reference
//       row = tbl.insertRow(tbl.rows.length),      // append table row
//       i;
//     // insert table cells to the new row
//     for (i = 0; i < tbl.rows[0].cells.length; i++) {
//       this.createCell(row.insertCell(i));
//     }
//   }

//   appendColumn = () => {
//     var tbl = document.getElementById('my-table'), // table reference
//       i;
//     // open loop for each row and append cell
//     for (i = 0; i < tbl.rows.length; i++) {
//       this.createCell(tbl.rows[i].insertCell(tbl.rows[i].cells.length));
//     }
//   }

//   // create DIV element and append to the table cell
//   createCell = (cell, style) => {
//     var div = document.createElement('div'); // create DIV element
//     div.setAttribute('class', style);        // set DIV class attribute
//     div.setAttribute('className', style);    // set DIV class attribute for IE (?!)
//     cell.appendChild(div);                   // append DIV to the table cell
//   }

//   render() {
//     return (
//       <div className="App">
//         <Navbar />
//         <div className="btn--container">
//           <button className="nav--btn" onClick={this.addRow}>Add Row</button>
//           <button className="nav--btn" onClick={this.addColumn}>Add Column</button>
//           <input className="color--picker" type="color" value="#FF0000" />
//           <div className="display_row_col">
//             <p>Rows: {this.state.row}</p>
//             <p>Cols: {this.state.column}</p>
//           </div>
//         </div>

//         <table id="my-table">
//           {/* <AddRow /> */}
//           {/* Table.jsx could be the parent of TableRow.jsx (presentational component)
//               TableRow.jsx could be the parent of TableCell.jsx (presentational component) */}
//           <Table
//             color={this.state.color}
//             row={this.state.row}
//             column={this.state.column}
//           />
//         </table>
//       </div>
//     )
//   }
// }

// export default App;
