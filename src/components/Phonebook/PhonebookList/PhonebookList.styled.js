import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 500px;
  padding: 15px;

  border-radius: 4px;

  background-color: #d4f2ff;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
    1px 4px 6px rgba(0, 0, 0, 0.16);

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
  width: 350px;

  padding: 0;
  margin-right: auto;
  margin-left: 50px;
  margin-top: 0;
  margin-bottom: 0;
`;

const ContactEl = styled.li`
  div {
    display: flex;
    align-items: center;
  }

  p {
    margin: 0;

    color: black;

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
