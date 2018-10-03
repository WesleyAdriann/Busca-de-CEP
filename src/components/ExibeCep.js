import React from 'react';
import TextField from '@material-ui/core/TextField';

class ExibeCep extends React.Component {
    render (){
        return (
            <div>
                {Object.entries(this.props.endereco).map(([key, value]) =>  {
                    if( value !== '' &&  (key === 'bairro' || key === 'complemento' || key === 'localidade' || key === 'logradouro' || key==='uf')) { 
                        return (
                            <div>
                                <TextField type="text" id={key} label={key} disabled value={value}/>
                            </div>
                        );
                    }
                })  
                }    
            </div>
        );
    }
}

export default ExibeCep;
