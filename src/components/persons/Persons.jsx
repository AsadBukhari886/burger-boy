import React, { PureComponent } from 'react';
import Person from './Person';


class Persons extends PureComponent {

    // shouldComponentUpdate(nextProp, nextState) {
    //     console.log("should component update");
    //     console.log("next props", nextProp)
    //     return true
    // }

    render() {
        
        console.log("this is persons")
        let displayData = null;
        if (this.props.state.toggle) {
            displayData = this.props.state.persons.map((val, index) => {
                return <Person
                    name={val.name}
                    ag={val.ag}
                    key={index}
                    changeHandler_1={this.props.changeHandler_0}
                    state={this.props.state} />
            })
        }

        return (
            <div >
                {this.props.state.cockpit ? <>
                    <button onClick={this.props.clickHandler_0}>Click</button>
                    {displayData}
                </> : null}
                


            </div>
        )
    }



}

export default Persons
