import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1170px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 36px;
  padding-right: 36px;
  padding-top: 30px;
  padding-bottom: 30px;

  border-radius: 4px;

  background-color: var(--primary-background-color);
  box-shadow: 0 0 10px rgba(199, 141, 75, 1);

  h1 {
    margin-top: 0;
    color: rgba(199, 141, 75, 1);
  }

  h2 {
    margin-top: 0;
    margin-bottom: 15px;

    font-weight: 700;
    font-size: 32px;
    line-height: 1.19;
    letter-spacing: 0.03em;
    color: rgba(199, 141, 75, 1);
  }
`;

export { Container };
