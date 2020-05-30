import React, { useState } from 'react';

import { getCep } from '../../services';

import {
  ButtonSearch,
  Container,
  Form,
  Input,
  Row,
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
      getCep(cepInput.value)
        .then((response: object) => {
          setCepInfo(response);
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
      <Row>
        <Form onSubmit={requestCep} >
          <Input
            error={cepInput.isError}
            helperText={cepInput.errorMessage}
            label="Informe o CEP"
            onChange={handleCepChange}
            value={cepInput.value}
            variant="outlined"
          />
          <ButtonSearch
            color={cepInput.isError ? 'secondary' : 'primary'}
            disableElevation
            variant="contained"
          >
            Buscar
          </ButtonSearch>
        </Form>
      </Row>
      <Row>
        { JSON.stringify(cepInfo) }
      </Row>
    </Container>
  );
}

export default App;
