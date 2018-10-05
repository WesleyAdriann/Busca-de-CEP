import React from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
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

class ExibeCep extends React.Component {
    render (){
        const { classes } = this.props;
        return (

            
            <div>
                <Grid Container>
                    <Grid item xs={8}>
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
                        })  
                        }
                    </Grid>
                </Grid>    
            </div>
        );
    }
}


export default ExibeCep;
