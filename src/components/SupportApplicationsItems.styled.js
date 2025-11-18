import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

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

const StyledLink = styled(Link)`
  display: inline-block;
  padding: 6px;

  border-radius: 4px;
  color: black;

  cursor: pointer;

  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  font-weight: 600;
  font-size: 18px;
  line-height: 1.19;
  text-align: center;
  letter-spacing: 0.03em;

  &:hover,
  &:focus {
    transform: scale(1.07);
    color: rgb(33, 150, 243);
  }
`;

export { SupportApplicationsList, SupportApplicationsItem, StyledLink };
