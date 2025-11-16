import { useParams, Outlet, useLocation } from 'react-router-dom';
import { supportConfig } from '@/routes/supportConfig';
import BackLink from 'components/BackLink';
import { Container } from '@/pages/SupportApplicationsDetails/SupportApplicationsDetails.styled';

const SupportApplicationsDetails = () => {
  const { id } = useParams();
  const location = useLocation();
  const supportConfigItem = supportConfig.find(item => item.path === id);
  const backLinkHref = location.state?.from ?? '/SupportApplications';

  return (
    <Container>
      <BackLink to={backLinkHref}>Back to Support applications</BackLink>
      <h3>Component: {supportConfigItem?.label ?? id}</h3>

      <Outlet />
    </Container>
  );
};

export default SupportApplicationsDetails;
