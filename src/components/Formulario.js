import React from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'


function Formulario(props) {
        return(
            <div className="container">
                <form onSubmit={props.handleSubmit}>
                    <TextField id="cep" label="CEP" type="text" placeholder="00000-000" onChange={props.handleInput}/>
                    <Button variant="contained" color="primary" type="submit">Enviar</Button>
                </form>
            </div>
        );
}

export default Formulario;