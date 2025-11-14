import styled from '@emotion/styled';

const CounterBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  width: 500px;
  padding: 15px;

  background-color: #d4f2ff;
  border-radius: 5px;

  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
    1px 4px 6px rgba(0, 0, 0, 0.16);

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

    color: white;

    border-radius: 6px;
    background-color: black;

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
