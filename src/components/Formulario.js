import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

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
            <div className="container">
                <form onSubmit={this.handleSubmit}>
                    <TextField id="cep" label="CEP" value={this.state.campo} type="text" placeholder="00000-000" onChange={event => this.handleInput(event.target.value)}/>
                    <Button variant="contained" color="primary" size='small'type="submit">Enviar</Button>
                </form>
            </div>
        );
    }
}

export default Formulario;