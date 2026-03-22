import styled from '@emotion/styled';

const ClockBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 500px;
  padding: 15px;

  background-color: var(--primary-background-color);
  border-radius: 5px;

  box-shadow: var(--primary-item-shadow);

  p {
    margin: 0;

    color: var(--primary-color);

    font-weight: 600;
    font-size: 24px;
    line-height: 1.19;
    text-align: center;
    letter-spacing: 0.03em;
  }
`;

export { ClockBox };
