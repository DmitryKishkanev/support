import styled from '@emotion/styled';

const PokemonInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 500px;

  padding: 15px;
  margin-bottom: 50px;

  background-color: #d4f2ff;
  border-radius: 4px;

  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
    1px 4px 6px rgba(0, 0, 0, 0.16);

  h1 {
    margin-top: 0;

    font-weight: 700;
    font-size: 32px;
    line-height: 1.19;
    letter-spacing: 0.03em;
  }
`;

export { PokemonInfoContainer };
