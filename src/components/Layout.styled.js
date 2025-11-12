import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

const HeaderEl = styled.header`
  text-align: center;

  h1 {
    margin-top: 0;
  }
`;

const LayoutList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  width: 100%;
  padding: 0;
  margin: 0;

  li {
    padding: 6px;
    border-radius: 4px;
    list-style-type: none;

    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

    background-color: rgb(33, 150, 243);

    cursor: pointer;

    &:hover,
    &:focus {
      transform: scale(1.07);
      background-color: rgba(84, 178, 255, 1);
    }
  }
`;

const NavLinkItem = styled(NavLink)`
  color: white;

  &:hover,
  &:focus {
    color: white;
  }
`;

export { HeaderEl, LayoutList, NavLinkItem };
