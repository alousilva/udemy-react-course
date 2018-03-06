import React from 'react';

import classes from './Cockpit.css';
import Aux from '../../hoc/Auxiliary';

const cockpit = (props) => {

    const assignedClasses = [];
    let btnClass = classes.Button;
    if(props.showPerson) {
        btnClass = [classes.Button, classes.Red].join(' ');
    }

    if (props.persons.length <= 2) {
        assignedClasses.push( classes.red );
    }
    if (props.persons.length <= 1) {
        assignedClasses.push( classes.bold );
    }

    return (
        <Aux>
            <h1> {props.appTitle} </h1>
            <p className={assignedClasses.join(' ')}>This paragraph will turn red when num Persons is less than 3 and bold
                when num Persons is less than 2</p>
            <button 
                className={btnClass}
                onClick={props.clicked}>
                Show Persons
            </button>
        </Aux>
    );
};

export default cockpit;