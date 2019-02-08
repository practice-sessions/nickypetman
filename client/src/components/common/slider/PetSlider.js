import React, { Component } from 'react';
import axios from 'axios';

import SliderTemplates from './slider_templates'; 

class PetSlider extends Component {

  state = {
    pets: []
  }

  componentWillMount() {
    axios.get('http://localhost:5000/api/v1/pets?_start=${this.props.start}&_end=${this.props.amount}').then(res => {
      this.setState({
        pets: res.data
      })
    })
  }
  
  render() {
    return (
      <div>
        <SliderTemplates 
          data={this.state.pets} 
          type={this.props.type}
          settings={this.props.settings}  
        />
      </div>
    );
  }
}

export default PetSlider;