import React, { Component } from "react";
import classes from "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { id: "errewr3", name: "Jose", age: 34 },
      { id: "43ed334", name: "Toy", age: 44 },
      { id: "dff4533", name: "Lise", age: 30 }
    ],
    otherState: "sdgsdfdgf",
    showPersons: false,
    buttonText: "Show Persons"
  };

  switchNameHandler = newName => {
    // NUNCA FAZER ISTO
    //this.state.persons[0].name = 'sdfsdsds';
    this.setState({
      persons: [
        { name: newName, age: 34 },
        { name: "Toy", age: 44 },
        { name: "Lise", age: 50 }
      ]
    });
  };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    console.log("personIndex: " + personIndex);

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    console.log(persons);
    persons[personIndex] = person;

    this.setState({ persons: persons });
  };

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    const buttonText = this.state.buttonText;
    this.setState({ showPersons: !doesShow });
    buttonText === "Show Persons"
      ? this.setState({ buttonText: "Hide Persons" })
      : this.setState({ buttonText: "Show Persons" });
  };

  deletePersonHandler = personIndex => {
    //alternativas para copiar um array
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  render() {
    const style = {
      backgroundColor: "green",
      color: "white",
      font: "inherit",
      border: "1px solid red",
      padding: "8px",
      cursor: "pointer"
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                changed={event => this.nameChangedHandler(event, person.id)}
              />
            );
          })}
        </div>
      );
      style.backgroundColor = "red";
    }

    let assignedClasses = [];
    if (this.state.persons.length <= 2) {
        assignedClasses.push( classes.red );
    }
    if (this.state.persons.length <= 1) {
        assignedClasses.push( classes.bold );
    }

    return (
        <div className={classes.App}>
            <h1> Hi, i 'm a react app</h1>
            <h2> fdgfgg </h2>
            <p className={assignedClasses.join(' ')}>This paragraph will turn red when num Persons is less than 3 and bold
            when num Persons is less than 2</p>
            <button style={style} onClick={this.togglePersonHandler}>
            {this.state.buttonText}
            </button>
            {persons}
        </div>
    );
  }
}

export default App;
