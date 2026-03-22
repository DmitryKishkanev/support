import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 500px;
  padding: 36px;

  border-radius: 4px;

  background-color: var(--primary-background-color);
  box-shadow: var(--primary-item-shadow);

  h1 {
    margin-top: 0;
  }

  h2 {
    margin-top: 0;
    margin-bottom: 10px;

    font-weight: 700;
    font-size: 32px;
    line-height: 1.19;
    letter-spacing: 0.03em;
  }
`;

const ContactBox = styled.ul`
  display: flex;
  gap: 20px;
  flex-direction: column;
  width: 100%;
  padding: 20px;
  margin-top: 0;
  margin-bottom: 0;
  color: var(--primary-color);
`;

const ContactEl = styled.li`
  div {
    display: flex;
    align-items: center;
  }

  p {
    margin: 0;

    font-weight: 400;
    font-size: 18px;
    line-height: 1.19;
    letter-spacing: 0.03em;
  }

  button {
    padding: 5px 15px;
    margin-left: auto;
  }
`;

export { Container, ContactBox, ContactEl };
