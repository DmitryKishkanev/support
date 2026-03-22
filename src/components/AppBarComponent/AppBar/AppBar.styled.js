import styled from '@emotion/styled';

const AppBarBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  width: 500px;
  padding: 15px;

  background-color: var(--primary-background-color);
  border-radius: 5px;

  box-shadow: var(--primary-item-shadow);

  h1 {
    margin: 0;

    font-weight: 700;
    font-size: 32px;
    line-height: 1.19;
    text-align: center;
    letter-spacing: 0.03em;
  }
`;

export { AppBarBox };
