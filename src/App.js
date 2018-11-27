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

  render() {
    return (
      <div>
        <Header />
        <br />

        <div className="container">
          <Tuner tuning={this.state.tuning} updateTuning={this.updateTuning.bind(this)} />
          <br />

          <hr />
          <label>Tab Name: </label>
          <input type="text" value={this.tabName}></input>
          <br />

          <div id="lines">
            {this.state.lines}
          </div>
          <br />

          <button onClick={this.addLine.bind(this)}>Add New Line</button>
          <button onClick={this.removeLine.bind(this)}>Remove Line</button>

        </div>

      </div>
    );
  }
}

export default App;
