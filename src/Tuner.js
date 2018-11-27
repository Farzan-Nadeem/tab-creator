import React, { Component } from 'react';
import './Tuner.css';

class Tuner extends Component {

    constructor(props) {
        super(props); 
        
        this.state = {
            tuning: this.props.tuning
        }
     }

    updateTuning(e) { 
        var tuning = this.state.tuning; 
        tuning[e.target.id] = e.target.value; 

        this.props.updateTuning(this.state.tuning); 
        this.setState({tuning: tuning});
    }

    render() {
        return (
            <div>
                <label>Set Tuning (can't change dynamically): </label> <br />
                <form onChange={this.updateTuning.bind(this)}>
                    1: <input className="tuner_input" maxLength="1" onChange={this.updateTuning.bind(this)} value={this.state.tuning[0]} id="0"></input> <br />
                    2: <input className="tuner_input" maxLength="1" onChange={this.updateTuning.bind(this)} value={this.state.tuning[1]} id="1"></input> <br />
                    3: <input className="tuner_input" maxLength="1" onChange={this.updateTuning.bind(this)} value={this.state.tuning[2]} id="2"></input> <br />
                    4: <input className="tuner_input" maxLength="1" onChange={this.updateTuning.bind(this)} value={this.state.tuning[3]} id="3"></input> <br />
                    5: <input className="tuner_input" maxLength="1" onChange={this.updateTuning.bind(this)} value={this.state.tuning[4]} id="4"></input> <br />
                    6: <input className="tuner_input" maxLength="1" onChange={this.updateTuning.bind(this)} value={this.state.tuning[5]} id="5"></input> <br />
                </form>
            </div>
        );
    }
}

export default Tuner;