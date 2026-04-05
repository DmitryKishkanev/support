import styled from '@emotion/styled';

const CounterBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  justify-content: center;
  width: 500px;
  padding: 15px;

  background-color: var(--primary-background-color);
  border-radius: 5px;

  box-shadow: var(--primary-item-shadow);

  h2 {
    margin: 0 auto 20px auto;
  }

  div {
    display: flex;
    gap: 15px;
  }
`;

export { CounterBox };
