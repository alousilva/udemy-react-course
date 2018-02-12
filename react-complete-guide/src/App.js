import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { name: 'Jose', age: 34 },
      { name: 'Toy', age: 44 },
      { name: 'Lise', age: 30 }
    ],
    otherState: "sdgsdfdgf"
  };

  switchNameHandler = (newName) => {
    // NUNCA FAZER ISTO
    //this.state.persons[0].name = 'sdfsdsds';
    this.setState({
      persons: [
        { name: newName, age: 34 },
        { name: 'Toy', age: 44 },
        { name: 'Lise', age: 50 }
      ]
    });
  };

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Jose', age: 34 },
        { name: event.target.value, age: 77 },
        { name: 'Lise', age: 30 }
      ]
    });  
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid red',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <h1> Hi, i 'm a react app</h1>
        <h2> fdgfgg </h2>
        <h2> fdgfgg </h2>
        <button 
          style={style}
          onClick={() => this.switchNameHandler('Bob')}>Switch Name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age} />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'Zacarias')}
          changed={this.nameChangedHandler} >My hobbies: pesca</Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age} />
      </div>
    );
  }
}

export default App;
