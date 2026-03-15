import styled from '@emotion/styled';
import { Box, Typography, TextField, Button } from '@mui/material';

const LoginFormBox = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 400px;
  padding: 15px;

  border-radius: 4px;
  background-color: rgba(20, 125, 223, 0.5);
  box-shadow: 0 0 10px rgba(82, 103, 121, 1);
`;

const LoginFormTitle = styled(Typography)`
  font-weight: 600;
  text-align: center;
  color: white;
`;

const LoginFormField = styled(TextField)`
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

const LoginFormError = styled(Typography)`
  color: red;
  font-size: 20px;
  text-align: center;
`;

const LoginFormButton = styled(Button)`
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
  LoginFormBox,
  LoginFormTitle,
  LoginFormField,
  LoginFormError,
  LoginFormButton,
};

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 500px;
  padding: 15px;
  /* justify-content: center; */

  border-radius: 4px;

  background-color: #d4f2ff;
  box-shadow:
    0px 1px 1px rgba(0, 0, 0, 0.12),
    0px 4px 4px rgba(0, 0, 0, 0.06),
    1px 4px 6px rgba(0, 0, 0, 0.16);
`;

const LoginFormLabel = styled.label`
  display: flex;
  flex-direction: column;
  width: 75%;
`;

const LoginFormSpan = styled.span`
  margin-bottom: 5px;

  font-weight: 400;
  font-size: 18px;
  line-height: 1.19;
  letter-spacing: 0.03em;
  color: black;
`;

const LoginFormInput = styled.input`
  /* width: 100%; */
  padding: 6px;

  border-radius: 4px;
  background-color: white;

  outline: none;
  cursor: pointer;

  font-weight: 400;
  font-size: 18px;
  line-height: 1.19;
  letter-spacing: 0.03em;
  color: black;
`;

// const LoginFormButton = styled.button`
//   margin-left: auto;
//   background-color: rgb(33, 150, 243);
//   transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
// `;

export { LoginForm, LoginFormLabel, LoginFormSpan, LoginFormInput };
