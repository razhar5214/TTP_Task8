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
          <Table
            state={this.state}>
          </Table>
        </div>
      </div>
    )
  }
}

export default App;