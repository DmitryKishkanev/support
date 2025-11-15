import { Outlet } from 'react-router-dom';
import {
  SupportApplicationsMain,
  SupportApplicationsList,
  SupportApplicationsItem,
  StyledNavLink,
} from '@/pages/SupportApplications.styled';
import { supportConfig } from '@/routes/supportConfig';

export default function SupportApplications() {
  return (
    <SupportApplicationsMain>
      <h2>Support applications</h2>
      <p>Click any of the links below to open the application</p>

      <SupportApplicationsList>
        {supportConfig.map(({ path, label }) => (
          <SupportApplicationsItem key={path}>
            <StyledNavLink to={path}>{label}</StyledNavLink>
          </SupportApplicationsItem>
        ))}
      </SupportApplicationsList>
      <Outlet />
    </SupportApplicationsMain>
  );
}
