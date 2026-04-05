import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 15px;
  padding: 15px;
  width: 100%;

  border-radius: 5px;
  background-color: rgba(0, 0, 0, 0.7);
  box-shadow: 0 0 10px rgba(199, 141, 75, 1);

  h4 {
    margin: 0;

    font-weight: 700;
    font-size: 24px;
    line-height: 1.19;
    text-align: center;
    letter-spacing: 0.03em;
    color: rgb(199, 141, 75);
  }

  p {
    margin: 0;
    color: rgb(199, 141, 75);
  }

  button {
    margin-left: auto;
    background-color: transparent;
    color: rgb(199, 141, 75);
    border-color: rgb(199, 141, 75);

    transition:
      transform 250ms cubic-bezier(0.4, 0, 0.2, 1),
      color 250ms cubic-bezier(0.4, 0, 0.2, 1),
      bordwer-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

    :hover,
    :focus {
      transform: scale(1.07);
      color: rgb(223, 186, 1);
      border-color: rgb(223, 186, 1);
    }
  }
`;
