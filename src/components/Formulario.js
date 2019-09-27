import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import MaskedInput from 'react-text-mask';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel'
import '../css/App.css';

class Formulario extends Component {
    constructor(props) {
        super(props);
        this.state = {
            campo : ''
        }
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.TextMaskCustom = this.TextMaskCustom.bind(this);
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

    TextMaskCustom(props) {
        const { inputRef, ...other } = props;
      
        return (
          <MaskedInput
            {...other}
            ref={inputRef} 
            mask={[/[0-9]/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/,]}
            planeholder="00000-000"
            guide={false}
            placeholderChar={'\u2000'}
            showMask
          />
        );
      }

    render() {
        return(
            <div>
            
                <Grid container spacing={3}>
                    <Grid item xs={9}>
                        <form onSubmit={this.handleSubmit} > 
                            <InputLabel style={{fontSize: '12px'}}>CEP</InputLabel>
                            <Input id="cep"
                                label="CEP"
                                fullWidth value={this.state.campo}
                                type="text"
                                onChange={event => this.handleInput(event.target.value)}
                                inputComponent={this.TextMaskCustom}/>
                        </form>
                    </Grid>
                    <Grid item xs={1}/>
                    <Grid item xs={2}>
                        <div className="mt">
                            <Button variant="contained" fullWidth color="primary" type="submit" onClick={this.handleSubmit}>Buscar</Button>    
                        </div>
                    </Grid>
                </Grid>
            
            </div>
        );
    }
}

export default Formulario;