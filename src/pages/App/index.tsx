import React, { useState } from 'react';
import {
  CircularProgress,
} from '@material-ui/core';
import { AxiosResponse, AxiosError } from 'axios'

import { getCep } from '../../services';

import {
  ButtonSearch,
  Container,
  Content,
  Form,
  Footer,
  Input,
  Link,
} from './style';

interface CepInput {
  value: string;
  isError: boolean;
  errorMessage: string;
}

interface CepInfo {
  erro?: boolean
}

const App: React.FC = () => {
  const [cepInput, setCepInput] = useState<CepInput>({
    value: '',
    isError: false,
    errorMessage: '',
  });
  const [cepInfo, setCepInfo] = useState<CepInfo>({
    erro: false
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const requestCep = (event: React.FormEvent) => {
    event.preventDefault();
    if(cepInput.value.match(/(\d{5})-(\d{3})/g)) {
      setIsLoading(true);
      getCep(cepInput.value)
        .then((response: AxiosResponse) => {
          setCepInfo(response.data);
          setIsLoading(false);
        })
        .catch((error: AxiosError) => {
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
            (isLoading) ?
            (
              <CircularProgress />
            ):(
              <>
                {
                  cepInfo.erro ?
                  (
                    <>
                      Cep não existe, tente outro.
                    </>
                  ):
                  (
                    <>
                      Cep existe

                    </>
                  )
                }

              </>
            )
          }
        </Content>
      </>
      <>
          <Footer>
            <Link
              href="https://github.com/wesleyadriann"
              rel="noopener noreferrer"
              target="_blank"
            >
              Wesley Adriann
            </Link>&nbsp;-&nbsp;
            <Link
              href="https://github.com/WesleyAdriann/busca_de_cep"
              rel="noopener noreferrer"
              target="_blank"
            >
              Busca de Cep v2
            </Link>
          </Footer>
      </>
    </Container>
  );
}

export default App;
