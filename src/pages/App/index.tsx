import React, { useState } from 'react';
import {
  CircularProgress,
} from '@material-ui/core';

import { getCep } from '../../services';

import {
  ButtonSearch,
  Container,
  Form,
  Input,
  Content,
} from './style';

interface CepInput {
  value: string;
  isError: boolean;
  errorMessage: string;
}

const App: React.FC = () => {
  const [cepInput, setCepInput] = useState<CepInput>({
    value: '',
    isError: false,
    errorMessage: '',
  });
  const [cepInfo, setCepInfo] = useState<object>({});
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const requestCep = (event: React.FormEvent) => {
    event.preventDefault();
    if(cepInput.value.match(/(\d{5})-(\d{3})/g)) {
      setIsLoading(true);
      getCep(cepInput.value)
        .then((response: object) => {
          setCepInfo(response);
          setIsLoading(false);
        })
        .catch((error: object) => {
          console.log('Erro para pegar cep, erro: ',error);
          setIsLoading(false);
        })
    } else {
      setCepInput({
        ...cepInput,
        isError: true,
        errorMessage: 'Formato de cep inválido'
      })
    }
  }

  const handleCepChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let { value } = event.target;
    if(value.length >= 10) return;
    value = value.replace(/\D/g,"").replace(/(\d{5})(\d)/g,"$1-$2")
    setCepInput({
      value,
      isError: false,
      errorMessage: '',
    });
  }

  return (
    <Container>
      <>
        <Form onSubmit={requestCep} >
          <Input
            disabled={isLoading}
            error={cepInput.isError}
            helperText={cepInput.errorMessage}
            label="Informe o CEP"
            onChange={handleCepChange}
            value={cepInput.value}
            variant="outlined"
          />
          <ButtonSearch
            color={cepInput.isError ? 'secondary' : 'primary'}
            disabled={isLoading}
            disableElevation
            type="submit"
            variant="contained"
          >
            Buscar
          </ButtonSearch>
        </Form>
      </>
      <>
        <Content
          variant="outlined"
          isLoading={isLoading}
        >
          {
            isLoading ?
            (
              <CircularProgress />
            ):(
              <>
                {
                  JSON.stringify(cepInfo)
                }
              </>
            )
          }
        </Content>
      </>
    </Container>
  );
}

export default App;
