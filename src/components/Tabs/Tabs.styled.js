import styled from '@emotion/styled';

const TabsBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px;

  background-color: var(--primary-background-color);
  border-radius: 4px;

  box-shadow: var(--primary-item-shadow);

  h1 {
    margin-top: 0;

    font-weight: 700;
    font-size: 32px;
    line-height: 1.19;
    letter-spacing: 0.03em;
  }
`;

const ItamsBox = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 30px;
`;

const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
  padding: 15px;

  box-shadow: var(--primary-item-shadow);

  h2 {
    margin-top: 0;
    margin-bottom: 10px;

    font-weight: 700;
    font-size: 24px;
    line-height: 1.19;
    letter-spacing: 0.03em;
  }

  p {
    margin: 0;

    color: var(--primary-color);

    font-weight: 400;
    font-size: 20px;
    line-height: 1.19;
    letter-spacing: 0.03em;
  }
`;

export { TabsBox, ItamsBox, ContentBox };
