import React, { Component } from 'react';

import Header from "./Header.js";
import Line from './Line.js';
import Tuner from './Tuner.js';

import './App.css';
import './index.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      lines: [],
      capo: "No capo",
      tabName: "",
      notes: "",
      tuning: // Defaults to standard tuning
      {
        0: "E",
        1: "B",
        2: "G",
        3: "D",
        4: "A",
        5: "E"
      }
    };
    
    // Add a line to start off
    this.addLine(); 
  }

  addLine() {
    var newLine = <Line tuning={this.state.tuning} lineNumber={this.state.lines.length} />;
    var oldLines = this.state.lines;

    oldLines.push(newLine);
    oldLines.push(<br />);

    this.setState({ lines: oldLines });
  }

  removeLine() {
    var oldLines = this.state.lines;

    if (oldLines.length > 0) {
      oldLines.pop();
      oldLines.pop();
    }

    this.setState({ lines: oldLines });
  }

  updateTuning(tuning) {
    this.setState({ tuning: tuning });
  }

  exportText() { 
    var tables = document.getElementById("lines").getElementsByTagName("table"); 
    
    var text = [];
    for(var lineCount = 0; lineCount < tables.length; lineCount++) { 
      var rows = tables[lineCount].rows;
      
      var line = ["", "", "", "", "", ""];
      for(var rowCount = 0; rowCount < rows.length ; rowCount++) { 
        var row = Array.from(rows[rowCount].children).map(function (item) { return item.firstChild.value});

        // Will need to pad the note with empty strings so that if we have 1 and 12p13 in the same chord, the 1 is centered
        // about the 12p13. First we need the length of the largest element
        var maxlength = Math.max.apply(null, row.map(function (item) { return item.length; } ) );
          
        row = row.map(function(item) { 
          var diff = maxlength- item.length;  
          if(diff === 0) { 
            return item; 
          }

          // Some maths gives this as a reliable function/method to pad each to center about the max value
          var initOffset = (new Array(Math.floor(diff/2) + 1)).join(" "); 
          var postOffset = (new Array(Math.ceil(diff/2) + 1)).join(" "); 

          return initOffset + item + postOffset;
        });
         
        // Add the parsed row to the overall line
        line = row.map(function (item, key) { return line[key] + item + " "; });
      }   

      // Add the parsed line to the overall tab
      text.push(line.join("\r\n")+"\r\n");
    }
 
    // Combine all the relevant information to make the full file
    var fileContents = "Tab Name: " + this.state.tabName + "\r\n" 
                      + "Capo: "    + this.state.capo    + "\r\n\r\n"
                      + text.join("\r\n") + "\r\n"
                      + "Notes: \r\n"
                      + this.state.notes; 

    // Send to the download function 
    // (was grabbed from https://stackoverflow.com/questions/3665115/create-a-file-in-memory-for-user-to-download-not-through-server (user Matěj Pokorný))
    this.download(this.state.tabName + ".txt", fileContents);
  }

  download(filename, text) { 
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);
  
    element.style.display = 'none';
    document.body.appendChild(element);
  
    element.click();
  
    document.body.removeChild(element);
  }

  titleChange(event) { 
    this.setState({tabName: event.target.value});
  }

  capoChange(event) { 
    this.setState({capo: event.target.value});
  }

  notesChange(event) { 
    this.setState({notes: event.target.value});
  }

  hideAllButtons() { 
    Array.from(document.getElementsByClassName("hideButton")).map(function(item) { item.click(); });
  }

  showAllButtons() { 
    Array.from(document.getElementsByClassName("showButton")).map(function(item) { item.click(); });
  }
  render() {
    return (
      <div>
        <Header />
        <br />

        <div className="container">
          <Tuner tuning={this.state.tuning} updateTuning={this.updateTuning.bind(this)} />
          <br />
          <button onClick={this.showAllButtons.bind(this)} style={{float:"right"}}>Show all buttons</button>
          <button onClick={this.hideAllButtons.bind(this)} style={{float:"right"}}>Hide all buttons</button>

          <br />
          <hr className="hr" />

          <table>
            <tbody>
              <tr className="tr"> 
                <td className="option">Tab Name:</td>
                <td className="option"><input type="text" defaultValue={this.state.tabName} onChange={this.titleChange.bind(this)}></input></td>
              </tr>
              <tr className="tr">
                <td className="option">Capo:</td>
                <td className="option"><input type="text" defaultValue={this.state.capo} onChange={this.capoChange.bind(this)}></input></td>
              </tr>
            </tbody>
          </table>
          
          <br />
          
          <div id="lines">
            {this.state.lines}
          </div>
          <br />

          <button onClick={this.addLine.bind(this)}>Add New Line</button>
          <button onClick={this.removeLine.bind(this)}>Remove Line</button>

          <br /><br />
          
          <label>Notes:</label> <br />
          <textarea className="textarea" defaultValue={this.state.notes} onChange={this.notesChange.bind(this)}></textarea>

        </div>

          <br /><br />
          <button onClick={this.exportText.bind(this)}>Export as text</button>

          <br /><br />
          <br /><br />
      </div>
    );
  }
}

export default App;
