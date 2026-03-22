import styled from '@emotion/styled';
import { Form } from 'formik';

const FormContainer = styled(Form)`
  display: flex;
  flex-direction: column;
  width: 530px;
  padding: 15px;
  margin-bottom: 35px;

  border-radius: 4px;

  box-shadow: var(--primary-item-shadow);

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
    color: rgb(199, 141, 75);
  }

  input {
    height: 33px;
    padding: 4px;

    border-radius: 4px;

    outline: none;
    cursor: pointer;

    font-weight: 400;
    font-size: 18px;
    line-height: 1.19;
    letter-spacing: 0.03em;
  }

  button {
    margin-left: auto;
  }
`;

export { FormContainer };
