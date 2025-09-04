import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  gap: 30px;
  flex-direction: column;
  align-items: center;
  width: 500px;
  padding: 15px;

  border-radius: 4px;

  background-color: #d4f2ff;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
    1px 4px 6px rgba(0, 0, 0, 0.16);

  h1 {
    margin-top: 0;
    color: black;
  }

  h2 {
    color: black;
  }

  ul {
    list-style: none;
  }

  p {
    color: black;
  }
`;
