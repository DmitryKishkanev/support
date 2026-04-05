import styled from '@emotion/styled';

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 500px;
  padding: 15px;

  background-color: var(--primary-background-color);
  border-radius: 5px;

  box-shadow: var(--primary-item-shadow);

  h1 {
    margin-top: 0;

    font-weight: 700;
    font-size: 32px;
    line-height: 1.19;
    letter-spacing: 0.03em;
    text-align: center;
  }

  label {
    display: flex;
    flex-direction: column;
  }

  span {
    margin-bottom: 6px;

    font-weight: 400;
    font-size: 16px;
    line-height: 1.19;

    letter-spacing: 0.03em;
  }

  input {
    width: 270px;
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
