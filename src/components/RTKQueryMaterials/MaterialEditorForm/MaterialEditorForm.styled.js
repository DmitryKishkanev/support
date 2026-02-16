import styled from '@emotion/styled';
import { Form } from 'formik';

const MaterialForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 15px;
  justify-content: center;

  padding: 15px;

  label {
    display: flex;
    flex-direction: column;
    width: 270px;
  }

  span {
    margin-bottom: 5px;
  }

  input {
    width: 100%;

    padding: 4px;

    border-radius: 4px;
    background-color: white;

    outline: none;
    cursor: pointer;

    font-weight: 400;
    font-size: 20px;
    line-height: 1.19;
    letter-spacing: 0.03em;
    color: black;
  }

  button {
    margin-left: auto;
  }
`;

export { MaterialForm };
