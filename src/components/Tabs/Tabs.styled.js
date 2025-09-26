import styled from '@emotion/styled';

const TabsBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px;
  margin-bottom: 50px;

  background-color: #d4f2ff;
  border-radius: 4px;

  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
    1px 4px 6px rgba(0, 0, 0, 0.16);

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

  border: 1px solid black;

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
  }
`;

export { TabsBox, ItamsBox, ContentBox };
