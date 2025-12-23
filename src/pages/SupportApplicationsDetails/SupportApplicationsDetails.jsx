import { useRef, Suspense } from 'react';
import { useParams, Outlet, useLocation, Link } from 'react-router-dom';
import { supportConfig } from '@/routesConfig/supportConfig';
import BackLink from 'components/BackLink';
import useLogOutRedirect from '@/hooks/useLogOuteRedirect';
import {
  Container,
  SupportItemBox,
} from '@/pages/SupportApplicationsDetails/SupportApplicationsDetails.styled';

const SupportApplicationsDetails = () => {
  const { id } = useParams();
  const location = useLocation();
  const supportConfigItem = supportConfig.find(item => item.path === id);
  const backLinkHref = useRef(location.state?.from ?? '/SupportApplications');

  useLogOutRedirect();

  return (
    <Container>
      <BackLink to={backLinkHref.current}>
        Back to Support applications
      </BackLink>
      <h3>Component: {supportConfigItem?.label ?? id}</h3>
      <SupportItemBox>
        {supportConfigItem?.element}
        <Link to="ApplicationMoreDetails">Application more details</Link>
      </SupportItemBox>

      <Suspense fallback={<div>Loading subpage...</div>}>
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default SupportApplicationsDetails;
