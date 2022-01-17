import React from "react"
import ReactDOM from "react"
import './App.css';
import { useState } from "react"
import Navbar from "./Components/Navbar"

export default function App() {

  const [grid, setGrid] = useState(
    {
      rows:0,
      cols:0
    }
  );

  function addRow(){
    //console.log('add row');
    setGrid(prevGrid => ({
      ...prevGrid,
      rows: prevGrid.rows+1
    }))
  }

  function addColumn(){
    //console.log('add col');
    setGrid(prevGrid => ({
      ...prevGrid,
      cols: prevGrid.cols+1
    }))
  }


    return (
      <div className="App">
        <Navbar />
        <div className="btn--container">
          <button className="nav--btn" onClick={addRow}>Add Row</button>
          <button className="nav--btn" onClick={addColumn}> Add Column</button>
          <input className="color--picker" type="color" value="#FF0000"/>
        </div>
      </div>
    );
}


