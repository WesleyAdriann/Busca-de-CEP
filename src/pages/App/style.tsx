import styled from 'styled-components';
import {
  Button,
  Paper,
  TextField,
} from '@material-ui/core';
import { ButtonProps } from '@material-ui/core/Button'

import { COLORS } from '../../style';

export const Container = styled.div`
  background-color: ${COLORS.lightBlue};
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding: 1.5em 1em;
`;


export const Form = styled.form`
  display: flex;
  min-height: 100px;
`;

export const Input = styled(TextField)`
  flex-grow: 1;


  .MuiOutlinedInput-root {
    background-color: ${COLORS.white};
    border-bottom-right-radius: 0 !important;
    border-top-right-radius: 0 !important;
  }
`

export const ButtonSearch = styled(Button)`
  border-bottom-left-radius: 0 !important;
  border-top-left-radius: 0 !important;
  max-height: 56px;
`;

interface propsContent extends ButtonProps {
  isLoading: boolean,
}

export const Content = styled(Paper)`
  display: flex;
  flex-direction: column;
  align-items: ${(props: propsContent) => props.isLoading ? 'center' : 'flex-start'};
  justify-content: ${(props: propsContent) => props.isLoading ? 'center' : 'flex-start'};
  flex-grow: 1;
  padding: 1em;
  word-wrap: anywhere;
`;
