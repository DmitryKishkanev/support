import styled from '@emotion/styled';

const CounterBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  justify-content: center;
  width: 500px;
  padding: 15px;

  background-color: #d4f2ff;
  border-radius: 5px;

  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
    1px 4px 6px rgba(0, 0, 0, 0.16);

  h2 {
    margin: 0 auto 20px auto;
  }

  div {
    display: flex;
    gap: 15px;
  }
`;

export { CounterBox };
