import styled from '@emotion/styled';
import { Form } from 'formik';

const ErrorText = styled.p`
  color: red;
`;

const DivForm = styled(Form)`
  display: flex;
  gap: 10px;
  flex-direction: column;
  width: 500px;
  padding: 15px;

  border-radius: 4px;

  background-color: #d4f2ff;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
    1px 4px 6px rgba(0, 0, 0, 0.16);

  h1 {
    margin: 0 auto 0 auto;

    font-weight: 700;
    font-size: 32px;
    line-height: 1.19;
    letter-spacing: 0.03em;
  }

  div {
    width: 270px;
  }

  label {
    display: flex;
    align-items: center;
    margin-bottom: 4px;
  }

  select {
    background-color: white;
    color: black;
  }

  textarea {
    width: 250px;
    height: 70px;
    padding: 8px;

    background-color: white;
    border-radius: 4px;

    resize: none;
    outline: none;
    cursor: pointer;

    font-weight: 400;
    font-size: 18px;
    line-height: 1.19;
    letter-spacing: 0.03em;

    color: black;
  }

  input {
    width: 100%;
    padding: 4px;

    border-radius: 4px;

    background-color: white;

    outline: none;
    cursor: pointer;

    font-weight: 400;
    font-size: 18px;
    line-height: 1.19;
    letter-spacing: 0.03em;
    color: black;
  }

  div .checkbox {
    display: flex;
    align-items: center;

    input {
      width: 20px;
      height: 20px;
    }

    span {
      margin-left: 10px;
    }
  }

  button {
    width: 100px;
    margin-left: auto;
  }
`;

export { ErrorText, DivForm };
