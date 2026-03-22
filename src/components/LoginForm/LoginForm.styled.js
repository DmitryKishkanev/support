import styled from '@emotion/styled';
import { Form } from 'formik';

const FormContainer = styled(Form)`
  display: flex;
  gap: 15px;
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

  label {
    display: flex;
    flex-direction: column;
    width: 270px;

    span {
      margin-bottom: 5px;

      font-weight: 400;
      font-size: 18px;
      line-height: 1.19;
      letter-spacing: 0.03em;
      color: var(--primary-color);
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
  }

  button {
    width: 100px;
    margin-left: auto;
  }
`;

const ErrorText = styled.div`
  color: red;
`;

export { FormContainer, ErrorText };
