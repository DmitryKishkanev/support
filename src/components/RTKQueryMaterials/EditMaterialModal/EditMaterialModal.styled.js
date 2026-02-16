import styled from '@emotion/styled';

const MaterialModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;

  h2 {
    margin: 0;

    text-align: center;
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  p {
    padding: 5px;
    margin: 0;
    border: 1px solid black;
    border-radius: 4px;
  }

  button {
    margin-left: auto;
    margin-right: auto;
  }
`;

export { MaterialModalContainer };
