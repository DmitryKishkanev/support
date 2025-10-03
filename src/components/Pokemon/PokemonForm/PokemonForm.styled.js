import styled from '@emotion/styled';

const PokemonFormBox = styled.form`
  display: flex;
  gap: 15px;
  margin-bottom: 30px;

  label {
    display: flex;
    width: 270px;
  }

  input {
    width: 100%;
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

export { PokemonFormBox };
