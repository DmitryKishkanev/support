import styled from '@emotion/styled';

const Container = styled.main`
  display: flex;
  flex-direction: column;
  gap: 25px;
  align-items: center;
  width: 100%;
  padding: 20px;
  background-color: rgba(0, 0, 0, 0.5);

  h3 {
    margin: 0 auto 0 0;

    font-weight: 700;
    font-size: 24px;
    line-height: 1.19;
    text-align: center;
    letter-spacing: 0.03em;
    color: rgb(199, 141, 75);
  }
`;

const SupportItemBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  gap: 20px;

  a {
    color: rgb(199, 141, 75);
    text-decoration: none;
    font-weight: 500;
    font-size: 20px;
    /* text-transform: uppercase; */

    transition:
      transform 250ms cubic-bezier(0.4, 0, 0.2, 1),
      color 250ms cubic-bezier(0.4, 0, 0.2, 1);

    :hover,
    :focus {
      transform: scale(1.07);
      color: rgb(223, 186, 1);
    }
  }
`;

export { Container, SupportItemBox };
