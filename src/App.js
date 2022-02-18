import { Component } from "react";
import styles from './App.module.css'
import Cockpit from "./Cockpit/Cockpit";
import Persons from "./components/persons/Persons";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      persons: [
        { name: "", ag: 6060, id: 23432 },
        { name: "aneeb", ag: 6137, id: 6453 },
        { name: "tasbiha", ag: 6074, id: 643234 }
      ],
      toggle: true,
      username: "hadi",
      cockpit: true

    }
  };


  // static getDerivedStateFromProps(props, state) {
  //   console.log("getDerivedStatefromProps", props)

  // }
  deleteIt = (index) => {
    // console.log("before", this.state)
    const splice = this.state.splice(index, 1)
    // console.log("after", this.state)
    this.setState([splice])

  }
  showIt = () => {
    // console.log("toggle", this.state)
    this.setState({ toggle: !this.state.toggle })
  }
  showIt2 = () => {
    this.setState({ cockpit: !this.state.cockpit })

  }

  changeHnadler = (event) => {
    this.setState({
      persons: [
        { name: this.state.username, ag: 6060, id: 23432 },
        { name: "aneeb", ag: 6137, id: 6453 },
        { name: "tasbiha", ag: 6074, id: 643234 }
      ],
      username: event.target.value
    })
    console.log("username", this.state.username)
  }


  render() {
    return <>
      <div className={styles.App}>
        {/* <button onClick={this.deleteIt}>Toggle me</button>
        <p >some text will ne here</p> */}
        {/* {data} */}
        <Persons
          person1={this.state.persons[0].name}
          clickHandler_0={this.showIt}
          state={this.state}
          changeHandler_0={this.changeHnadler}
        />
        {this.state.cockpit ? <Cockpit state={this.state.toggle} /> : "this is me"}

        <button onClick={this.showIt2}>remove All</button>
      </div>
    </>
  }

}





























// import React, { useState } from 'react';
// import styles from './App.module.css';
// import Char from './components/Char';
// import Radium, { StyleRoot } from 'radium';

// function App() {
//   const [username, setUsername] = useState([
//     { name: "asad", ag: 6060 },
//     { name: "aneeb", ag: 6137 },
//     { name: "tasbiha", ag: 6074 }
//   ])
//   const [toggle, setToggle] = useState(true);
//   let data = null;
//   const classes = [];
//   if (username.length <= 2) {
//     classes.push("red")
//   }
//   if (username.length <= 1) {
//     classes.push("bold")
//   }

//   const showIt = () => {
//     setToggle(!toggle)
//   }
//   const deleteIt = (index) => {
//     console.log("before", username)
//     username.splice(index, 1)
//     console.log("after", username)
//     setUsername(username)

//   }

//   if (toggle) {
//     data = username.map((val, index) => {
//       return <Char click={deleteIt.bind(this, index)} key={index}>{val.name}</Char>
//     })
//   }


//   return (
//     <>
//       <div className={styles.App}>
//         <button  onClick={showIt}>Toggle me</button>
//         <p className={classes.join(' ')}>some text will ne here</p>
//         {data}

//       </div>
//     </>

//   );
// }

// export default Radium(App);
