import React, { Component } from 'react';
import Formulario from './components/Formulario';
import ExibeCep from './components/ExibeCep';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import CircularProgress from '@material-ui/core/CircularProgress';
import axios from 'axios';
import './css/App.css';

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
      return ( 
        <p align="center">AGUARDANDO O CEP<br/><br/>
          <CircularProgress size={25}/></p> );
    }else {
      return (<ExibeCep endereco={this.state.dadosPostais} />);
    }   
  }
  
  render () {
    return (
      <div className="container">
        <Grid container>
          <Grid item xs={2}/>
          <Grid item xs={8}>
            
            <Paper>
            <div className="pd">
              <Formulario buscaCep={this.getCep} />  
              </div>
            </Paper>
            
          </Grid>
        </Grid>
        <Grid container>
          
          <Grid item xs={2}/>
          <Grid item xs={8} >
            
            <Paper>
              <div className="pd mt">
                {this.retornoCep()}
              </div>
            </Paper>
            </Grid>  
        </Grid>
      </div>
    );
  }
}

export default App;
