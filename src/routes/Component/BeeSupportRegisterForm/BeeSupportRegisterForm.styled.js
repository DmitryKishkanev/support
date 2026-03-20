import styled from '@emotion/styled';
import { Box, Typography, TextField, Button } from '@mui/material';

const RegisterFormBox = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 400px;
  padding: 15px;

  border-radius: 4px;
  background-color: rgba(8, 121, 120, 0.7);
  box-shadow: 0 0 10px rgba(82, 103, 121, 1);
`;

const RegisterFormTitle = styled(Typography)`
  font-weight: 600;
  text-align: center;
  color: rgb(199, 141, 75);
`;

const RegisterFormField = styled(TextField)`
  border-radius: 4px;
  background-color: rgb(59, 59, 59);
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

  /* цвет текста внутри input */
  & .MuiInputBase-input {
    color: rgb(223, 186, 1);
  }

  /* стили для автозаполнения */
  & input:-webkit-autofill {
    -webkit-text-fill-color: rgb(223, 186, 1); /* цвет текста */
  }

  /* стили для label */
  & .MuiInputLabel-root {
    color: rgba(199, 141, 75); /* цвет по умолчанию */
  }

  & .MuiInputLabel-root.Mui-focused {
    color: rgba(223, 186, 1, 1); /* цвет при фокусе */
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
  border: 2px solid rgb(199, 141, 75);
  color: rgb(199, 141, 75);
  transition:
    transform 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: scale(1.09);
    color: rgb(223, 186, 1);
    border-color: rgb(223, 186, 1);
  }

  &:focus,
  &:focus-visible,
  &:active {
    border-color: rgb(223, 186, 1); /* фиксируем цвет */
    color: rgb(223, 186, 1);
    outline: none; /* убираем белый outline */
    box-shadow: none; /* убираем glow */
  }
`;

export {
  RegisterFormBox,
  RegisterFormTitle,
  RegisterFormField,
  RegisterFormError,
  RegisterFormButton,
};
