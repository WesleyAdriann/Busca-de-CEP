import styled from 'styled-components';
import {
  Button,
  Paper,
  TextField,
} from '@material-ui/core';
import { ButtonProps } from '@material-ui/core/Button'

import { COLORS } from '../../style';

export const Container = styled.div`
  background: ${COLORS.lightBlue};
  background: -webkit-linear-gradient(to top, ${COLORS.lightBlue}, ${COLORS.lightBlue2});
  background: linear-gradient(to top, ${COLORS.lightBlue}, ${COLORS.lightBlue2});

  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding: 1.5em 1em;

  @media (min-width: 500px) {
    align-items: center;
  }
`;


export const Form = styled.form`
  display: flex;
  min-height: 100px;

  @media (min-width: 500px) {
    max-width: 1140px;
    width: 75%;
  }
`;

export const Input = styled(TextField)`
  flex-grow: 1;


  .MuiOutlinedInput-root {
    background-color: ${COLORS.white};
    border-bottom-right-radius: 0 !important;
    border-top-right-radius: 0 !important;
  }

  .MuiFormLabel-root {
    background-color: ${COLORS.white};
    border-radius: 3px;
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

  @media (min-width: 500px) {
    max-width: 1140px;
    width: 75%;
  }
`;

export const CepText = styled.div`
  margin-bottom: 0.5em;
  transition: 0.2s;

  span:first-child {
    font-weight: 600;
    text-transform: uppercase;
  }
`;

export const NoCepText = styled.div`
  text-align: center;
  width: 100%;
`;

export const Footer = styled.div`
  align-items: center;
  display: flex;
  height: 50px;
  justify-content: center;
`;

export const Link = styled.a`
  color: ${COLORS.black};
  text-decoration: none;
  user-select: none;

  &:hover {
    text-decoration: underline;
  }

  &:visited {
    color: ${COLORS.black};
  }
`;
