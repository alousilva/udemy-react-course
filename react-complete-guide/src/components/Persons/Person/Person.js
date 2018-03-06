import React, {Component} from "react";
import PropTypes from 'prop-types';
import classes from "./Person.css";
import Aux from "../../../hoc/Auxiliary";
import withClass from "../../../hoc/withClass";

class Person extends Component {
    constructor(props){
        super(props);
        console.log('[Person.js] inside constructor', props);
    }
  
    componentWillMount(){
        console.log('[Person.js] inside componentWillMount()');
    }
  
    componentDidMount(){
        console.log('[Person.js] inside componentDidMount()');
    }
    render(){
        console.log('[Person.js] inside render()');
        return(
            <Aux>
                <p onClick={this.props.click}>I'm {this.props.name} with {this.props.age} years old!</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changed} value={this.props.name}/>
            </Aux>
        );
    }
}

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    change: PropTypes.func
};

export default withClass(Person, classes.Person);