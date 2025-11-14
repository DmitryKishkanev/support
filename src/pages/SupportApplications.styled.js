import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

const SupportApplicationsMain = styled.main`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;

  h2 {
    margin: 0;

    font-weight: 700;
    font-size: 34px;
    line-height: 1.19;
    text-align: center;
    letter-spacing: 0.03em;
  }

  p {
    margin: 0;

    color: rgb(33, 150, 243);

    font-weight: 400;
    font-size: 24px;
    line-height: 1.19;
    text-align: center;
    letter-spacing: 0.03em;
  }
`;

const SupportApplicationsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  padding: 0 15px;
  margin: 0 0 35px;

  width: 100%;
`;

const SupportApplicationsItem = styled.li`
  list-style-type: none;
`;

const StyledNavLink = styled(NavLink)`
  display: inline-block;
  padding: 6px;

  border-radius: 4px;
  color: black;

  cursor: pointer;

  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    transform: scale(1.07);
    color: rgb(33, 150, 243);
  }

  &.active {
    background-color: rgb(33, 150, 243);
    color: black;
  }
`;

export {
  SupportApplicationsMain,
  SupportApplicationsList,
  SupportApplicationsItem,
  StyledNavLink,
};
