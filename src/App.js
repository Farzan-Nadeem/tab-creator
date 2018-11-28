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
      tuning:
      {
        0: "E",
        1: "B",
        2: "G",
        3: "D",
        4: "A",
        5: "E"
      }
    };
 
    this.addLine()
  }

  addLine() {
    var newLine = <Line tuning={this.state.tuning} lineNumber={this.state.lines.length} />;
    var oldLines = this.state.lines;

    oldLines.push(<br />);
    oldLines.push(newLine);

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

        var maxlength = Math.max.apply(null, row.map(function (item) { return item.length; } ) );
          
        row = row.map(function(item) { 
          var diff = maxlength- item.length;  
          if(diff === 0) { 
            return item; 
          }

          var initOffset = (new Array(Math.floor(diff/2) + 1)).join(" "); 
          var postOffset = (new Array(Math.ceil(diff/2) + 1)).join(" "); 

          return initOffset + item + postOffset;

        });
         
        line = row.map(function (item, key) { return line[key] + item + " "; });
        
      }   
      text.push(line.join("\r\n")+"\r\n");
    }
 
    var fileContents = "Tab Name: " + this.state.tabName + "\r\n" 
                      + "Capo: "    + this.state.capo    + "\r\n\r\n"
                      + text.join("\r\n") + "\r\n"
                      + "Notes: \r\n"
                      + this.state.notes; 

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

  render() {
    return (
      <div>
        <Header />
        <br />

        <div className="container">
          <Tuner tuning={this.state.tuning} updateTuning={this.updateTuning.bind(this)} />
          <br />
          <hr />

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
