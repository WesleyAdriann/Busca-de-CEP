import React, { Component } from 'react';
import Formulario from './components/Formulario'

import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      cep: ''
    }
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(e) {
    this.setState({
        cep : e.target.value
    })

  }

  handleSubmit(event) {
    event.preventDefault();
    
  }

  render () {
    return (
      <div>
        <Formulario handleSubmit={this.handleSubmit} handleInput={this.handleInput}/>
      </div>
    );
  }
}

export default App;
