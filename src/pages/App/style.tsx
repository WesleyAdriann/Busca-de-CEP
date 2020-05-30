import styled from 'styled-components';
import {
  Button,
  TextField,
} from '@material-ui/core';

import { COLORS } from '../../style';

export const Container = styled.div`
  background-color: ${COLORS.lightBlue};
  min-height: 100vh;
  padding: 1em;
`;

export const Row = styled.div`
  width: 100%;
`;


export const Form = styled.form`
  display: flex;
  min-height: 100px;
`;

export const Input = styled(TextField)`
  flex-grow: 1;

  .MuiOutlinedInput-root {
    border-bottom-right-radius: 0 !important;
    border-top-right-radius: 0 !important;
  }
`

export const ButtonSearch = styled(Button)`
  border-bottom-left-radius: 0 !important;
  border-top-left-radius: 0 !important;
  max-height: 56px;
`
