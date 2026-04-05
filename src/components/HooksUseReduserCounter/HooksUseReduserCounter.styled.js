import styled from '@emotion/styled';

const CounterBox = styled.div`
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
    margin: 0 auto 0 auto;

    font-weight: 700;
    font-size: 32px;
    line-height: 1.19;
    letter-spacing: 0.03em;
  }

  p {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 70px;
    margin: 0;

    color: var(--secondary-color);

    border-radius: 6px;
    background-color: rgb(59, 59, 59);

    font-weight: 500;
    font-size: 62px;
    line-height: 1.19;
    text-align: center;
    letter-spacing: 0.03em;
    text-transform: uppercase;
  }

  div {
    display: flex;
    gap: 15px;
  }
`;

export { CounterBox };
