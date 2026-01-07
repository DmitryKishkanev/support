import styled from '@emotion/styled';

const Container = styled.main`
  display: flex;
  flex-direction: column;
  gap: 25px;
  align-items: center;

  width: 100%;

  h3 {
    margin: 0 auto 0 0;

    font-weight: 700;
    font-size: 24px;
    line-height: 1.19;
    text-align: center;
    letter-spacing: 0.03em;
  }
`;

const SupportItemBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  gap: 20px;

  a {
    color: black;
    text-decoration: none;
    font-weight: 500;
    font-size: 20px;
    /* text-transform: uppercase; */

    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1),
      color 250ms cubic-bezier(0.4, 0, 0.2, 1);

    :hover,
    :focus {
      transform: scale(1.07);
      color: rgb(33, 150, 243);
    }
  }
`;

export { Container, SupportItemBox };
