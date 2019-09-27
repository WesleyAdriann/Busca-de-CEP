import React, { Component } from 'react';
import Formulario from './components/Formulario';
import ExibeCep from './components/ExibeCep';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import CircularProgress from '@material-ui/core/CircularProgress';
import axios from 'axios';
import './css/App.css';
import _ from 'lodash';
import GoogleMap from './components/GoogleMap';

class App extends Component {
  constructor() {
    super();
    this.state = {
      erroCep: false,
      erroMap: false,
      estaCarregando: false,
      dadosPostais: {},
      lat: 0,
      lng: 0,
    };
    this.getCep = this.getCep.bind(this);  
    this.getMapCoords = this.getMapCoords.bind(this);
    this.retornoCep = this.retornoCep.bind(this);
    this.retornoMap = this.retornoMap.bind(this);
  } 

  getCep(cepInformado) {
    this.setState ({
      estaCarregando: true,
      dadosPostais: {},
      lat: 0,
      lng: 0,
    });
    axios.get(`https://viacep.com.br/ws/${cepInformado}/json/`)
      .then(response => {
        this.setState ({
          dadosPostais: response.data
        });
      })
      .catch(error => {
        this.setState ({
          erroCep: true,
        })
      });
    
      
    this.getMapCoords(cepInformado);   
  }

  getMapCoords(cepInformado) {
    axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${cepInformado}&key=AIzaSyDl1J3fQIzzzEkm9A3dOPtbn5-Yb9--aXs`)
        .then(response => {
          this.setState({
            lat: response.data.results[0].geometry.location.lat,
            lng: response.data.results[0].geometry.location.lng,
          });
        })
        .catch(() => {
          this.setState ({
            erroMap: true,
          })
        })
    
    if(this.state.erroCep || this.state.erroMap) {
      this.setState ({
        erroCep: false,
        erroMap: false,
      });
    }

    this.setState({
      estaCarregando: false,
    });
  }

  retornoCep () {
    if(this.state.estaCarregando){
      return(
        <p align="center"><CircularProgress size={25}/></p>
      );
    }else if(this.state.erroCep) {
      return (
        <p align="center">CEP INVÁLIDO</p>
      );
    }else if (_.isEmpty(this.state.dadosPostais)) {
      return (
        <p align="center">INFORME O CEP</p>
      );
    }else {
      return (
        <div>
          <Grid container>
            <Grid item xs={7}>
              <ExibeCep endereco={this.state.dadosPostais}/>
            </Grid>
            <Grid item xs={1}/>
            <Grid item xs={4}>
             {this.retornoMap()}
            </Grid>
          </Grid>
        </div>
      )
    }
  }

  retornoMap() {
    if(this.state.erroMap) {
      return(
        <p align="center">CEP NÃO ENCONTRADO NO GOOGLE MAPS</p>
      )
    }else {
      return (
        <GoogleMap lat={this.state.lat} lng={this.state.lng}/>
      )
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
