import styled from '@emotion/styled';

export const StatisticsList = styled.ul`
  display: flex;
  gap: 15px;
  flex-direction: column;
  align-items: flex-start;
  padding: 0;
  margin-top: 20px;
  margin-bottom: 0;

  li {
    display: flex;
    width: 100%;
    align-items: center;
  }

  p {
    margin: 0;

    font-weight: 500;
    font-size: 20px;
    line-height: 1.19;
    letter-spacing: 0.03em;
  }

  span {
    margin-left: auto;

    font-weight: 500;
    font-size: 20px;
    line-height: 1.19;
    letter-spacing: 0.03em;
  }
`;
