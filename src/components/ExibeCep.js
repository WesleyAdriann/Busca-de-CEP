import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import { createMuiTheme, MuiThemeProvider  } from '@material-ui/core/styles';

const theme = createMuiTheme ({
    overrides: {
        MuiFormLabel: {
            // root: {
            //     color: 'red',
            //     '&$focused': {color: 'green'},                
            // },
            disabled: {
                '&$disabled': {color: 'black'},
            },
        },
        MuiInputBase: {
            disabled: {
                '&$disabled': {color: 'black'},
            },
        },
    }
})

class ExibeCep extends Component {
    render (){
        return (
            <div>   
                {Object.entries(this.props.endereco).map(([key, value]) =>  {
                    if( value !== '' &&  (key === 'bairro' || key === 'complemento' || key === 'localidade' || key === 'logradouro' || key==='uf')) { 
                        return (
                            <div><p/><p/>
                                <MuiThemeProvider theme={theme}> 
                                <TextField type="text" id={key} fullWidth disabled label={key} value={value} variant="outlined" />
                                </MuiThemeProvider>  
                            </div>
                        );
                    }
                    return <div/>
                })  
                }
            </div>
        );
    }
}


export default ExibeCep;
