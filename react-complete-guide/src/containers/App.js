import React, { PureComponent } from "react";
import classes from "../containers/App.css";
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";
import Aux from "../hoc/Auxiliary";
import withClass from "../hoc/withClass";

class App extends PureComponent {
  constructor(props) {
    super(props);
    console.log("[App.js] inside constructor", props);
    this.state = {
      persons: [
        { id: "errewr3", name: "Jose", age: 28 },
        { id: "43ed334", name: "Toy", age: 44 },
        { id: "dff4533", name: "Lise", age: 30 }
      ],
      otherState: "sdgsdfdgf",
      showPersons: false,
      toggleClicked: 0
    };
  }

  componentWillMount() {
    console.log("[App.js] inside componentWillMount()");
  }

  componentDidMount() {
    console.log("[App.js] inside componentDidMount()");
  }

  //   shouldComponentUpdate(nextProps, nextState) {
  //     console.log(
  //       "[UPDATE App.js] inside shouldComponentUpdate()",
  //       nextProps,
  //       nextState
  //     );
  //     return (
  //       nextState.persons !== this.state.persons ||
  //       nextState.showPersons !== this.state.showPersons
  //     );
  //   }

  componentWillUpdate(nextProps, nextState) {
    console.log(
      "[UPDATE App.js] inside componentWillUpdate()",
      nextProps,
      nextState
    );
  }

  componentDidUpdate() {
    console.log("[UPDATE App.js] inside componentDidUpdate()");
  }

  //   state = {
  //     persons: [
  //       { id: "errewr3", name: "Jose", age: 34 },
  //       { id: "43ed334", name: "Toy", age: 44 },
  //       { id: "dff4533", name: "Lise", age: 30 }
  //     ],
  //     otherState: "sdgsdfdgf",
  //     showPersons: false,
  //     buttonText: "Show Persons"
  //   };

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
    this.setState((prevState, props) => {
        return {
            showPersons: !doesShow,
            toggleClicked:prevState.toggleClicked + 1
        }
    });
  };

  deletePersonHandler = personIndex => {
    //alternativas para copiar um array
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  render() {
    console.log("[App.js] inside render()");
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}
        />
      );
    }

    return (
      <Aux>
        <button
          onClick={() => {
            this.setState({ showPersons: true });
          }}
        >
          Show Persons
        </button>
        <Cockpit
          appTitle={this.props.title}
          showPerson={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonHandler}
          buttonText={this.state.buttonText}
        />
        {persons}
      </Aux>
    );
  }
}

export default withClass(App, classes.App);
