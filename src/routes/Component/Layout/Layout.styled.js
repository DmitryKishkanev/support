import styled from '@emotion/styled';
import { Link, NavLink } from 'react-router-dom';

const HeaderEl = styled.header`
  display: flex;
  /* align-items: center; */
  justify-content: space-between;
  padding: 0 0 15px 0;
  margin-bottom: 30px;

  width: 95%;

  border-bottom: 1px solid black;
`;

const HeaderElBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

const HeaderElLogoLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 5px;
  margin-left: 30px;
  color: inherit;

  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    transform: scale(1.07);
  }

  &:hover img,
  &:focus img {
    box-shadow: 0 0 10px rgba(234, 255, 0, 1);
  }
`;

const HeaderElImg = styled.img`
  width: 70px;

  border-radius: 50%;
  box-shadow: 0 0 10px rgba(82, 103, 121, 1);

  transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;

const HeaderElTitle = styled.h1`
  margin: 0 auto 0 0;

  font-weight: 700;
  font-size: 38px;
  line-height: 1.19;
  text-align: center;
  letter-spacing: 0.03em;
`;

const LayoutList = styled.ul`
  display: flex;
  /* align-items: center; */
  align-items: flex-end;

  gap: 24px;
  margin: 0 0 0 0px;

  padding: 0;
`;

const LayoutListItem = styled.li`
  display: inline-block;

  list-style-type: none;

  cursor: pointer;

  & .active {
    padding: 2px 8px;
    border-radius: 8px;
    background-color: rgb(33, 150, 243);
    color: white;

    &:hover {
      color: white;
    }
  }
`;

const StyledNavLink = styled(NavLink)`
  display: inline-block;

  color: black;

  transition:
    transform 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: scale(1.09);
    color: rgb(33, 150, 243);
  }

  &:focus {
    transform: scale(1.09);
    color: white;
  }
`;

const MainContainer = styled.main`
  display: flex;
  width: 100%;
  min-height: calc(100vh - 207px);
  /* height: calc(100vh - 207px); */
  justify-content: center;
  align-items: center;
  /* display: flex;
  justify-content: center;
  align-items: center; */
`;

export {
  HeaderEl,
  HeaderElBox,
  HeaderElLogoLink,
  HeaderElImg,
  HeaderElTitle,
  LayoutList,
  LayoutListItem,
  StyledNavLink,
  MainContainer,
};
