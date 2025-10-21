import styled from '@emotion/styled';

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 500px;
  padding: 15px;
  margin-bottom: 50px;

  background-color: #d4f2ff;
  border-radius: 5px;

  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
    1px 4px 6px rgba(0, 0, 0, 0.16);

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

    border: 1px solid black;
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

  button {
    margin-left: auto;
  }
`;

export { FormContainer };
