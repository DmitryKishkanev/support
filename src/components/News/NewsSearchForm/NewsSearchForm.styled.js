import styled from '@emotion/styled';

export const NewsForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 0 15px 15px;

  h1 {
    margin: 0;

    font-weight: 700;
    font-size: 32px;
    line-height: 1.19;
    letter-spacing: 0.03em;
    text-align: center;
  }

  div {
    display: flex;
    gap: 15px;
  }

  input {
    width: 270px;
    padding: 4px;

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
`;
