import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
//import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styles from '../list/list.css';
import axios from 'axios';

//import Button from '../buttons/Buttons';



class OwnersList extends Component {

    state = {
        owners: [],
        pets: [],
        todos: [],
        petname: this.props.petname,
        petrounds: this.props.updatepetrounds,  
        start: this.props.start,
        end: this.props.start + this.props.amount,
        amount: this.props.amount
    }

    renderPetRounds = () => {
      return this.props.updatepetround ? 
        <h3><strong>Pet Rounds</strong> List</h3> 
        : <h3><strong>Dogs</strong> List</h3>
    }

    render() {
        return(
            <div className={styles.ownersList_wrapper}>
                { this.renderPetRounds() }
            </div>
        )
    }
}

export default OwnersList;