import styled from '@emotion/styled';
import { Form } from 'formik';

const FormContainer = styled(Form)`
  display: flex;
  gap: 15px;
  flex-direction: column;
  width: 500px;
  padding: 15px;
  margin-bottom: 50px;

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
  button {
    width: 100px;
    margin-left: auto;
  }
`;

const ErrorText = styled.div`
  color: red;
`;

export { FormContainer, ErrorText };
