import styled from '@emotion/styled';

export const OnFirstRenderBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  width: 500px;
  padding: 15px;

  background-color: var(--primary-background-color);
  border-radius: 4px;

  box-shadow: var(--primary-item-shadow);

  h1 {
    margin: 0;

    font-weight: 700;
    font-size: 32px;
    line-height: 1.19;
    letter-spacing: 0.03em;
  }

  p {
    color: var(--primary-color);

    font-weight: 400;
    font-size: 16px;
    line-height: 1.19;
    letter-spacing: 0.03em;
  }
`;
