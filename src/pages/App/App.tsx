import React, { useState } from 'react';

import { getCep } from '../../services';

import {
  Container,
  Row,
  Form,
  Input
} from './style';


const App: React.FunctionComponent = () => {
  const [cep, setCep] = useState<string>('');
  const [cepInfo, setCepInfo] = useState<object>({});

  const requestCep = (event: React.FormEvent) => {
    event.preventDefault();
    getCep(cep)
      .then((response: object) => {
        setCepInfo(response);
      })
  }

  const handleCepChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCep(event.target.value);
  }

  return (
    <Container>
      <Row>
        Informe seu CEP
        <Form onSubmit={requestCep} >
          <Input onChange={handleCepChange} />
        </Form>
      </Row>
      <Row>
        { JSON.stringify(cepInfo) }
      </Row>
    </Container>
  );
}

export default App;
