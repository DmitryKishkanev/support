import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

const HeaderEl = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 0;
  margin-bottom: 30px;

  width: 95%;

  border-bottom: 1px solid black;

  h1 {
    margin: 0 auto 0 0;

    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1),
      color 250ms cubic-bezier(0.4, 0, 0.2, 1);

    font-weight: 700;
    font-size: 48px;
    line-height: 1.19;
    text-align: center;
    letter-spacing: 0.03em;

    &:hover,
    &:focus {
      transform: scale(1);
      color: rgb(33, 150, 243);
    }
  }
`;

const HeaderElBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const LayoutList = styled.ul`
  display: flex;
  align-items: center;
  gap: 24px;

  padding: 0;
  margin: 0;
  margin-bottom: 0;

  li {
    display: inline-block;

    list-style-type: none;

    cursor: pointer;

    & .active {
      padding: 2px 8px;
      border-radius: 4px;
      background-color: rgb(33, 150, 243);
      color: white;
    }
  }
`;

const StyledNavLink = styled(NavLink)`
  display: inline-block;

  color: black;

  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    transform: scale(1.07);
    color: rgb(33, 150, 243);
  }

  &.active {
    /* background-color: rgba(84, 178, 255, 1); */
    color: black;
  }
`;

export { HeaderEl, HeaderElBox, LayoutList, StyledNavLink };
