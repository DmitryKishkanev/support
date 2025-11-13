import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

const SupportApplicationsMain = styled.main`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;

  h2 {
    margin: 0;
  }

  p {
    margin: 0;
  }
`;

const SupportApplicationsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  padding: 0 15px;
  margin: 0;

  width: 100%;
`;

const SupportApplicationsItem = styled.li`
  list-style-type: none;
`;

const StyledNavLink = styled(NavLink)``;

export {
  SupportApplicationsMain,
  SupportApplicationsList,
  SupportApplicationsItem,
  StyledNavLink,
};
