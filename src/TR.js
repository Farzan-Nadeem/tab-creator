import React, { Component } from 'react';
import './Line.css';

class TDE extends Component { 
    render() { 
        var ele = true; 
        
        if(this.props.value !== undefined) { 
            ele = <td><input onChange={this.props.onChange} onBlur={this.props.onBlur} value={this.props.value} disabled={this.props.disabled} size="1" style={{ margin: "0px", border: "1px solid " + this.props.borderColor, backgroundColor: "white" }} ></input></td>
        } 
        else if(this.props.defaultValue !== undefined) { 
            ele = <td><input onChange={this.props.onChange} onBlur={this.props.onBlur} defaultValue={this.props.defaultValue} disabled={this.props.disabled} size="1" style={{ margin: "0px", border: "1px solid " + this.props.borderColor, backgroundColor: "white" }} ></input></td>
        } 
        else { 
            ele = <td><input onChange={this.props.onChange} onBlur={this.props.onBlur} disabled={this.props.disabled} size="1" style={{ margin: "0px", border:"1px solid " + this.props.borderColor, backgroundColor: "white" }}  ></input></td>
        }

        return( 
            ele
        );
    }
}

class TR extends Component {
    
    clearBorder(event) { 
        event.target.style.border = "1px solid white";
    }
 
    render() {
        var main = true;

        if (this.props.createDefault) {
            if (this.props.isTune) {
                main = <tr className="chordEntry">
                    <TDE onChange={this.props.onChange} onBlur={this.clearBorder.bind(this)} value={this.props.value[0]} borderColor="white" disabled={true} />
                    <TDE onChange={this.props.onChange} onBlur={this.clearBorder.bind(this)} value={this.props.value[1]} borderColor="white" disabled={true} />
                    <TDE onChange={this.props.onChange} onBlur={this.clearBorder.bind(this)} value={this.props.value[2]} borderColor="white" disabled={true} />
                    <TDE onChange={this.props.onChange} onBlur={this.clearBorder.bind(this)} value={this.props.value[3]} borderColor="white" disabled={true} />
                    <TDE onChange={this.props.onChange} onBlur={this.clearBorder.bind(this)} value={this.props.value[4]} borderColor="white" disabled={true} />
                    <TDE onChange={this.props.onChange} onBlur={this.clearBorder.bind(this)} value={this.props.value[5]} borderColor="white" disabled={true} />
                </tr>;
            } else {
                main = <tr className="chordEntry">
                    <TDE onChange={this.props.onChange} onBlur={this.clearBorder.bind(this)} value={this.props.value} borderColor="white" disabled={true} />
                    <TDE onChange={this.props.onChange} onBlur={this.clearBorder.bind(this)} value={this.props.value} borderColor="white" disabled={true} />
                    <TDE onChange={this.props.onChange} onBlur={this.clearBorder.bind(this)} value={this.props.value} borderColor="white" disabled={true} />
                    <TDE onChange={this.props.onChange} onBlur={this.clearBorder.bind(this)} value={this.props.value} borderColor="white" disabled={true} />
                    <TDE onChange={this.props.onChange} onBlur={this.clearBorder.bind(this)} value={this.props.value} borderColor="white" disabled={true} />
                    <TDE onChange={this.props.onChange} onBlur={this.clearBorder.bind(this)} value={this.props.value} borderColor="white" disabled={true} />
                </tr>;
            }

        } else {
            main = <tr className="chordEntry">
                <TDE onChange={this.props.onChange} onBlur={this.clearBorder.bind(this)} defaultValue="-" borderColor="black" disabled={false} />
                <TDE onChange={this.props.onChange} onBlur={this.clearBorder.bind(this)} defaultValue="-" borderColor="black" disabled={false} />
                <TDE onChange={this.props.onChange} onBlur={this.clearBorder.bind(this)} defaultValue="-" borderColor="black" disabled={false} />
                <TDE onChange={this.props.onChange} onBlur={this.clearBorder.bind(this)} defaultValue="-" borderColor="black" disabled={false} />
                <TDE onChange={this.props.onChange} onBlur={this.clearBorder.bind(this)} defaultValue="-" borderColor="black" disabled={false} />
                <TDE onChange={this.props.onChange} onBlur={this.clearBorder.bind(this)} defaultValue="-" borderColor="black" disabled={false} />                
            </tr>;
        }

        return (
            main
        );
    }
}


export default TR;
