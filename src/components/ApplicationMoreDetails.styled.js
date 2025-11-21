import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 15px;
  padding: 15px;

  width: 100%;

  border-radius: 5px;

  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
    1px 4px 6px rgba(0, 0, 0, 0.16), 0px -1px 1px rgba(0, 0, 0, 0.12),
    0px -4px 4px rgba(0, 0, 0, 0.06), -1px -4px 6px rgba(0, 0, 0, 0.16);

  h4 {
    margin: 0;

    font-weight: 700;
    font-size: 24px;
    line-height: 1.19;
    text-align: center;
    letter-spacing: 0.03em;
  }

  p {
    margin: 0;
  }

  button {
    margin-left: auto;

    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

    :hover,
    :focus {
      transform: scale(1.07);
    }
  }
`;
