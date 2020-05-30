import React, { useState } from 'react';
import {
  CircularProgress,
} from '@material-ui/core';
import { AxiosResponse, AxiosError } from 'axios'

import {
  getCep,
} from '../../services';

import {
  ButtonSearch,
  CepText,
  Container,
  Content,
  Form,
  Footer,
  Input,
  Link,
  NoCepText,
} from './style';

interface CepInput {
  value: string;
  isError: boolean;
  errorMessage: string;
}

interface CepInfo {
  cep?: string;
  erro?: boolean;
}

const App: React.FC = () => {
  const [cepInput, setCepInput] = useState<CepInput>({
    value: '',
    isError: false,
    errorMessage: '',
  });
  const [cepInfo, setCepInfo] = useState<CepInfo>({});
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const requestCep = (event: React.FormEvent) => {
    event.preventDefault();
    setIsLoading(true);

    if(cepInput.value.match(/(\d{5})-(\d{3})/g)) {
      setIsLoading(true);
      getCep(cepInput.value)
        .then((response: AxiosResponse) => {
          if(response.data.erro) {
            setCepInput({
              ...cepInput,
              isError: true,
              errorMessage: 'Cep não existe'
            })
            setCepInfo({});
          } else {
            setCepInfo(response.data);
          }
          setIsLoading(false);
        })
        .catch((error: AxiosError) => {
          console.log('Erro para pegar cep, erro: ',error);
          setIsLoading(false);
          setCepInput({
            ...cepInput,
            isError: true,
            errorMessage: 'Ocorreu um erro para encontrar o cep, tente novamente'
          })
        })
    } else {
      setCepInput({
        ...cepInput,
        isError: true,
        errorMessage: 'Formato de cep inválido'
      })
      setCepInfo({});
      setIsLoading(false);
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
            isLoading &&
            <CircularProgress />
          }

          {
            !isLoading && (Object.entries(cepInfo).length ?
              (
                <>
                  {
                    Object.entries(cepInfo).map(([key, value]) => {
                      if(value) {
                        return (
                          <CepText key={key}>
                            <span>{key}</span>: {value}
                          </CepText>
                        )
                      }
                    })
                  }
                </>
              ):(
                <NoCepText>
                  Informe o cep no campo acima
                </NoCepText>
              )
            )}
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
