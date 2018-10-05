import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Icon from '@material-ui/core/Icon';

class Formulario extends Component {
    constructor(props) {
        super(props);
        this.state = {
            campo : ''
        }
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault(); //Não atualizar a pagina
        if (this.state.campo !== '') {
           this.props.buscaCep(this.state.campo);
        }
      }

    handleInput(campoinformado) {
        this.setState({
            campo : campoinformado
        });
      }

    render() {
        return(
            <div>
            <form onSubmit={this.handleSubmit}> 
                <Grid container>
                    <Grid item xs={10}>
                        <TextField id="cep" label="CEP" fullWidth value={this.state.campo} type="text" placeholder="00000-000" onChange={event => this.handleInput(event.target.value)}/>
                    </Grid>
                    <Grid item xs={1}/>
                    <Grid item xs={1}>
                    
                        <Button variant="extendedFab" fullWidth color="primary" size='small'type="submit">Buscar</Button>    
                    </Grid>
                </Grid>
            </form>
            </div>
        );
    }
}

export default Formulario;