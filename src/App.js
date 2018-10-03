import React, { Component } from 'react';
import Formulario from './components/Formulario';
import './App.css';
import ExibeCep from './components/ExibeCep';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      erro: false,
      estaCarregando: true,
      dadosPostais: {}
    };
    this.getCep = this.getCep.bind(this);  
    this.retornoCep = this.retornoCep.bind(this);

    
  } 

  getCep(cepInformado) {
    axios.get(`https://viacep.com.br/ws/${cepInformado}/json/`)
      .then(response => {
        this.setState ({
          estaCarregando: false,
          dadosPostais: response.data
        });
      })
      .catch(error => {
        this.setState ({
          erro: true
        })
      });
  }

  retornoCep () {
    if(this.state.erro) {
      return "CEP INVALIDO";
    }else if(this.state.estaCarregando) {
      return "CARREGANDO";
    }else {
      return (<ExibeCep endereco={this.state.dadosPostais} />)
    }   
  }
  
  render () {
    return (
      <div>
        <Formulario buscaCep={this.getCep} />
        {this.retornoCep()}
      </div>
    );
  }
}

export default App;
