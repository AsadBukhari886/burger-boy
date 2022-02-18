import React, { Component } from 'react';
import classes from '../.././App.module.css';
import Aux from '../../hoc/Auxiliary';
import NewContainer from '../../hoc/NewContainer';
import anotherContainer from '../../hoc/anotherContainer';


class Person extends Component {

    render() {
        console.log("state", this.props.state.username)
        return (
            <Aux>
                <p>{this.props.ag}</p>
                <p>{this.props.person1}</p>
                <p>this is {this.props.name}</p>
                <input
                    onChange={this.props.changeHandler_1}
                    value={this.props.state.username} 
                    ref={""}
                    />
            </Aux>
        )
    }


}

export default (Person)
