import styled from '@emotion/styled';

const RegisterForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 500px;
  padding: 15px;

  justify-content: center;

  border-radius: 4px;

  background-color: #d4f2ff;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
    1px 4px 6px rgba(0, 0, 0, 0.16);
`;

const RegisterFormTitle = styled.h1`
  margin: 0;
  font-weight: 700;
  font-size: 32px;
  line-height: 1.19;
  letter-spacing: 0.03em;
  text-align: center;
  color: black;
`;

const RegisterFormLabel = styled.label`
  display: flex;
  flex-direction: column;
  width: 300px;
`;

const RegisterFormSpan = styled.span`
  margin-bottom: 5px;

  font-weight: 400;
  font-size: 18px;
  line-height: 1.19;
  letter-spacing: 0.03em;
  color: black;
`;

const RegisterFormInput = styled.input`
  width: 100%;
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

const RegisterFormButton = styled.button`
  margin-left: auto;

  background-color: rgb(33, 150, 243);
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;

export {
  RegisterForm,
  RegisterFormTitle,
  RegisterFormLabel,
  RegisterFormSpan,
  RegisterFormInput,
  RegisterFormButton,
};
