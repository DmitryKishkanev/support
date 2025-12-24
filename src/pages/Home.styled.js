import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

const HomePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const HomePageTitle = styled.h2`
  margin: 0 0 50px 0;
`;

const HomePageLink = styled(Link)`
  display: flex;
  align-items: center;

  color: black;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  font-weight: 700;
  font-size: 70px;
  line-height: 1.19;
  text-align: center;
  letter-spacing: 0.03em;

  &:hover,
  &:focus {
    transform: scale(1.07);
    color: rgb(33, 150, 243);
  }
`;

const HomePageImg = styled.img`
  width: 600px;
`;

export { HomePageContainer, HomePageTitle, HomePageLink, HomePageImg };
