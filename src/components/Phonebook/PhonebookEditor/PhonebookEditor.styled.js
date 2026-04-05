import styled from '@emotion/styled';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 15px;
  margin-bottom: 35px;

  box-shadow: var(--primary-item-shadow);
  border-radius: 4px;

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

export { Form };
