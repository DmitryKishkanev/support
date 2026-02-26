import styled from '@emotion/styled';
import { Form } from 'formik';

const FormContainer = styled(Form)`
  display: flex;
  flex-direction: column;

  width: 100%;
  padding: 15px;

  border: 1px solid black;
  border-radius: 4px;

  h2 {
    margin: 0;
    text-align: center;
  }

  label {
    display: flex;
    flex-direction: column;
    width: 270px;
    margin-bottom: 30px;
  }

  span {
    margin-bottom: 5px;

    font-weight: 400;
    font-size: 18px;
    line-height: 1.19;
    letter-spacing: 0.03em;
  }

  input {
    height: 33px;
    padding: 3px;

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

  div {
    display: flex;
    gap: 15px;
    margin-left: auto;
  }

  button {
  }
`;

export { FormContainer };
