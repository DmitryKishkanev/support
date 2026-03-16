import styled from '@emotion/styled';
import { Box, Typography, TextField, Button } from '@mui/material';

const RegisterFormBox = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 400px;
  padding: 15px;

  border-radius: 4px;
  background-color: rgba(20, 125, 223, 0.9);
  box-shadow: 0 0 10px rgba(82, 103, 121, 1);
`;

const RegisterFormTitle = styled(Typography)`
  font-weight: 600;
  text-align: center;
  color: white;
`;

const RegisterFormField = styled(TextField)`
  border-radius: 4px;
  background-color: white;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  & .MuiOutlinedInput-root {
    & fieldset {
      border: none;
    }
    &:hover fieldset {
      border: none;
    }
    &.Mui-focused fieldset {
      border: none;
    }
  }

  &:hover {
    transform: scale(1.05);
  }
  &:focus {
    transform: scale(1.05);
  }

  /* стили для label */
  & .MuiInputLabel-root {
    color: black; /* цвет по умолчанию */
  }

  & .MuiInputLabel-root.Mui-focused {
    color: black; /* цвет при фокусе */
    font-size: 1.2rem;
  }
`;

const RegisterFormError = styled(Typography)`
  color: red;
  font-size: 20px;
  text-align: center;
`;

const RegisterFormButton = styled(Button)`
  align-self: center;
  width: 100px;
  border: 2px solid white;
  color: white;
  transition:
    transform 250ms cubic-bezier(0.4, 0, 0.2, 1),
    border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    transform: scale(1.09);
    border-color: white;
  }
`;

export {
  RegisterFormBox,
  RegisterFormTitle,
  RegisterFormField,
  RegisterFormError,
  RegisterFormButton,
};
