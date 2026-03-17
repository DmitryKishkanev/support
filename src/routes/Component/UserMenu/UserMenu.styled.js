import styled from '@emotion/styled';

const UserMenuBox = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
  margin-top: 16px;
`;

const UserMenuName = styled.p`
  margin: 0;
  font-weight: 500;
  font-size: 18px;
  line-height: 1.19;
  letter-spacing: 0.03em;
  color: black;
`;

const UserMenuButton = styled.button`
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;

export { UserMenuBox, UserMenuName, UserMenuButton };
