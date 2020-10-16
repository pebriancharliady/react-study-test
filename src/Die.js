import React, { Component } from 'react'
import './Die.css'

class Die extends Component {
    render() {
        let dieIcon = `fas fa-dice-${this.props.dieNum}`
        return (
            <div className={this.props.className}>
                <i className={dieIcon}></i>
            </div>
        );
    }
}

export default Die;
