import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const SupportApplicationsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  padding: 0 15px;
  margin: 0 0 35px;

  width: 100%;
`;

const SupportApplicationsItem = styled.li`
  list-style-type: none;
`;

const StyledLink = styled(Link)`
  display: inline-block;
  padding: 8px;

  border-radius: 16px;
  box-shadow: 0 0 10px rgba(82, 103, 121, 1);
  color: black;

  cursor: pointer;

  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);

  font-weight: 600;
  font-size: 18px;
  line-height: 1.19;
  text-align: center;
  letter-spacing: 0.03em;

  &:hover,
  &:focus {
    transform: scale(1.09);
    box-shadow: 0 0 10px rgba(0, 140, 255, 1);
  }
`;

export { SupportApplicationsList, SupportApplicationsItem, StyledLink };
