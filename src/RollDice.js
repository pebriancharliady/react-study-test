import React, {Component} from 'react';
import './RollDice.css'
import Die from './Die';

class RollDice extends Component {
    state = { 
        dieOne:"one",
        dieTwo:"two",
        isRolling:false
     }
    static defaultProps = {
        die: ['one','two','three','four','five','six']
    }

    roll = (e) => {
        let randDie1 = this.props.die[Math.floor(Math.random() * this.props.die.length)]
        let randDie2 = this.props.die[Math.floor(Math.random() * this.props.die.length)]
        this.setState({
            dieOne:randDie1,
            dieTwo:randDie2,
            isRolling:true
        })
        setTimeout(() => {
            this.setState({
                isRolling:false
            })
        }, 1200);
    }
    // {this.state.isRolling ? "anim" : " "}
    // {this.state.isRolling ? "anim" : " "} 
    render() {
        return (
            <div className="RollDice">
                <div className="RollDice-container">
                    <Die dieNum={this.state.dieOne} className={this.state.isRolling ? "Die anim" : "Die"}/>
                    <Die dieNum={this.state.dieTwo} className={this.state.isRolling ? "Die anim" : "Die"}/>
                </div>
                {this.state.isRolling ? 
                    <button disabled>Rolling</button>: 
                    <button onClick={this.roll}>Roll Dice</button>
                }
            </div>
        );
    }
}

export default RollDice;