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
    appendRow(grid.rows);
  }

  function addColumn(){
    //console.log('add col');
    setGrid(prevGrid => ({
      ...prevGrid,
      cols: prevGrid.cols+1
    }))
    appendColumn();
  }
  function appendRow(rows) {
    var tbl = document.getElementById('my-table'), // table reference
        row = tbl.insertRow(tbl.rows.length),      // append table row
        i;
    // insert table cells to the new row
    for (i = 0; i < tbl.rows[0].cells.length; i++) {
        createCell(row.insertCell(i));
    }
  }
  function appendColumn() {
    var tbl = document.getElementById('my-table'), // table reference
        i;
    // open loop for each row and append cell
    for (i = 0; i < tbl.rows.length; i++) {
        createCell(tbl.rows[i].insertCell(tbl.rows[i].cells.length));
    }
}
 
// create DIV element and append to the table cell
  function createCell(cell, style) {
      var div = document.createElement('div'); // create DIV element
      div.setAttribute('class', style);        // set DIV class attribute
      div.setAttribute('className', style);    // set DIV class attribute for IE (?!)
      cell.appendChild(div);                   // append DIV to the table cell
  }


 
    return (
      <div className="App">
        <Navbar />
        <div className="btn--container">
          <button className="nav--btn" onClick={addRow}>Add Row</button>
          <button className="nav--btn" onClick={addColumn}> Add Column</button>
          <input className="color--picker" type="color" value="#FF0000"/>
          <div className="display_row_col">
            <p>Rows: {grid.rows}</p>
            <p>Cols: {grid.cols}</p>
          </div>
        </div>
            
          <table id="my-table">
            {/* <AddRow /> */}
            {/* Table.jsx could be the parent of TableRow.jsx (presentational component)
              TableRow.jsx could be the parent of TableCell.jsx (presentational component) */}


          </table>
        </div>
      
    );
}


