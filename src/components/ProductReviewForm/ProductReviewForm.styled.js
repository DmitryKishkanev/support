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

  background-color: var(--primary-background-color);
  box-shadow: var(--primary-item-shadow);

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
    color: var(--secondary-color);
  }

  textarea {
    width: 250px;
    height: 70px;
    padding: 8px;

    border-radius: 4px;

    resize: none;
    outline: none;
    cursor: pointer;

    font-weight: 400;
    font-size: 18px;
    line-height: 1.19;
    letter-spacing: 0.03em;

    color: var(--secondary-color);
  }

  input {
    width: 100%;
    padding: 4px;

    border-radius: 4px;

    outline: none;
    cursor: pointer;

    font-weight: 400;
    font-size: 18px;
    line-height: 1.19;
    letter-spacing: 0.03em;
  }

  div .checkbox {
    display: flex;
    align-items: center;

    input {
      appearance: none;
      position: relative;
      width: 20px;
      height: 20px;
      border: 1px solid var(--primary-color);
      border-radius: 4px;

      &:checked {
        background-color: var(--primary-color);
        border-color: var(--secondary-color);
      }

      &:checked::after {
        content: '✔';
        color: white;
        font-size: 18px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
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
