import React, { Component } from 'react';
import './Line.css';

class TR extends Component {
    
    clearBorder(event) { 
        event.target.style.border = "1px solid white";
    }
 
    render() {

        var main = true;

        if (this.props.createDefault) {
            if (this.props.isTune) {
                main = <tr className={this.props.className}>
                    <td><input onBlur={this.clearBorder.bind(this)} value={this.props.value[0]} style={{ margin: "0px", border: "1px solid white", backgroundColor: "white" }} className="chordEntry" disabled={true}></input></td>
                    <td><input onBlur={this.clearBorder.bind(this)} value={this.props.value[1]} style={{ margin: "0px", border: "1px solid white", backgroundColor: "white" }} className="chordEntry" disabled={true}></input></td>
                    <td><input onBlur={this.clearBorder.bind(this)} value={this.props.value[2]} style={{ margin: "0px", border: "1px solid white", backgroundColor: "white" }} className="chordEntry" disabled={true}></input></td>
                    <td><input onBlur={this.clearBorder.bind(this)} value={this.props.value[3]} style={{ margin: "0px", border: "1px solid white", backgroundColor: "white" }} className="chordEntry" disabled={true}></input></td>
                    <td><input onBlur={this.clearBorder.bind(this)} value={this.props.value[4]} style={{ margin: "0px", border: "1px solid white", backgroundColor: "white" }} className="chordEntry" disabled={true}></input></td>
                    <td><input onBlur={this.clearBorder.bind(this)} value={this.props.value[5]} style={{ margin: "0px", border: "1px solid white", backgroundColor: "white" }} className="chordEntry" disabled={true}></input></td>
                </tr>;
            } else {
                main = <tr className={this.props.className}>
                    <td><input onBlur={this.clearBorder.bind(this)} value={this.props.value} style={{ margin: "0px", border: "1px solid white", backgroundColor: "white" }} className="chordEntry" disabled={true}></input></td>
                    <td><input onBlur={this.clearBorder.bind(this)} value={this.props.value} style={{ margin: "0px", border: "1px solid white", backgroundColor: "white" }} className="chordEntry" disabled={true}></input></td>
                    <td><input onBlur={this.clearBorder.bind(this)} value={this.props.value} style={{ margin: "0px", border: "1px solid white", backgroundColor: "white" }} className="chordEntry" disabled={true}></input></td>
                    <td><input onBlur={this.clearBorder.bind(this)} value={this.props.value} style={{ margin: "0px", border: "1px solid white", backgroundColor: "white" }} className="chordEntry" disabled={true}></input></td>
                    <td><input onBlur={this.clearBorder.bind(this)} value={this.props.value} style={{ margin: "0px", border: "1px solid white", backgroundColor: "white" }} className="chordEntry" disabled={true}></input></td>
                    <td><input onBlur={this.clearBorder.bind(this)} value={this.props.value} style={{ margin: "0px", border: "1px solid white", backgroundColor: "white" }} className="chordEntry" disabled={true}></input></td>
                </tr>;
            }

        } else {
            main = <tr className={this.props.className}>
                <td><input onBlur={this.clearBorder.bind(this)}defaultValue="-" style={{ border: "1px solid black", margin: "0px" }} className="chordEntry"></input></td>
                <td><input onBlur={this.clearBorder.bind(this)}defaultValue="-" style={{ border: "1px solid black", margin: "0px" }} className="chordEntry"></input></td>
                <td><input onBlur={this.clearBorder.bind(this)}defaultValue="-" style={{ border: "1px solid black", margin: "0px" }} className="chordEntry"></input></td>
                <td><input onBlur={this.clearBorder.bind(this)}defaultValue="-" style={{ border: "1px solid black", margin: "0px" }} className="chordEntry"></input></td>
                <td><input onBlur={this.clearBorder.bind(this)}defaultValue="-" style={{ border: "1px solid black", margin: "0px" }} className="chordEntry"></input></td>
                <td><input onBlur={this.clearBorder.bind(this)}defaultValue="-" style={{ border: "1px solid black", margin: "0px" }} className="chordEntry"></input></td>
            </tr>;
        }

        return (
            main
        );
    }
}


export default TR;
