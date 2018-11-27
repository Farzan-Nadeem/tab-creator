import React, { Component } from 'react'; 
import './Line.css';
import TR from './TR.js';

class Line extends Component {
    constructor(props) {
        super(props);

        this.state = {
            maxWidth: 2,
            input: this.props.tuning,
            tableRows: [
                <TR onChange={this.updateSize} createDefault={true} isTune={true} value={this.props.tuning} />,
                <TR onChange={this.updateSize} createDefault={true} value="|" />,
                <TR onChange={this.updateSize} />
            ]
        }
    }

    updateSize(event) { 
        event.target.size = event.target.value.length || 1; 
    } 

    createChord() {
        var TRs = this.state.tableRows;
        TRs.push(<TR onChange={this.updateSize} />);
        this.setState({ tableRows: TRs });

        this.clearAllBorders();
    }

    deleteChord() {
        var TRs = this.state.tableRows;
        if (TRs.length > 2) {
            TRs.pop();
            this.setState({ tableRows: TRs });
        }
    }

    insertBar() {
        var TRs = this.state.tableRows;
        TRs.push(<TR createDefault={true} value="|" />);
        this.setState({ tableRows: TRs });
        this.clearAllBorders();
    }

    hideButtons() {
        document.getElementById(this.props.lineNumber + "C").hidden = true;
        document.getElementById(this.props.lineNumber + "D").hidden = true;
        document.getElementById(this.props.lineNumber + "I").hidden = true;
        document.getElementById(this.props.lineNumber + "H").hidden = true;
        document.getElementById(this.props.lineNumber + "B").hidden = true;
        document.getElementById(this.props.lineNumber + "S").hidden = false;
        return;
    }

    showButtons() {
        document.getElementById(this.props.lineNumber + "C").hidden = false;
        document.getElementById(this.props.lineNumber + "D").hidden = false;
        document.getElementById(this.props.lineNumber + "I").hidden = false;
        document.getElementById(this.props.lineNumber + "H").hidden = false;
        document.getElementById(this.props.lineNumber + "B").hidden = false;
        document.getElementById(this.props.lineNumber + "S").hidden = true;
        return;
    }

    clearAllBorders() { 
        var inputs = document.getElementById(this.props.lineNumber + "LineTable").getElementsByTagName("input"); 
 
        for(var i = 12; i < inputs.length; i++ ) {
            inputs[i].focus(); 
            inputs[i].blur(); 
        } 
    }

    render() {
        return (
            <div id={this.props.lineNumber + "Container"}>
                <table id={this.props.lineNumber + "LineTable"}>
                    <tbody>
                        {this.state.tableRows}
                    </tbody>
                </table>

                <button id={this.props.lineNumber + "C"} style={{ marginLeft: this.state.maxWidth + "%" }} className="chordAction" onClick={this.createChord.bind(this)}>Create Chord</button>
                <button id={this.props.lineNumber + "D"} style={{ marginLeft: this.state.maxWidth + "%" }} className="chordAction" onClick={this.deleteChord.bind(this)}>Delete Chord</button>
                <button id={this.props.lineNumber + "I"} style={{ marginLeft: this.state.maxWidth + "%" }} className="chordAction" onClick={this.insertBar.bind(this)}>Insert Bar</button>
                <button id={this.props.lineNumber + "B"} style={{ marginLeft: this.state.maxWidth + "%" }} className="chordAction" onClick={this.clearAllBorders.bind(this)}>Clear Borders</button>
                <button id={this.props.lineNumber + "H"} style={{ marginLeft: this.state.maxWidth + "%" }} className="chordAction" onClick={this.hideButtons.bind(this)}>Hide Buttons</button>
                <button id={this.props.lineNumber + "S"} style={{ marginLeft: this.state.maxWidth + "%", float: "right" }} className="chordAction" onClick={this.showButtons.bind(this)} hidden>Show</button>
            </div>
        );
    }
}

export default Line;