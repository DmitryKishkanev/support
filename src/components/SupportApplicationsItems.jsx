import { useLocation } from 'react-router-dom';
import {
  SupportApplicationsList,
  SupportApplicationsItem,
  StyledLink,
} from 'components/SupportApplicationsItems.styled';

const SupportApplicationsItems = ({ supportConfig }) => {
  const location = useLocation();
  return (
    <SupportApplicationsList>
      {supportConfig.map(({ path, label }) => (
        <SupportApplicationsItem key={path}>
          <StyledLink to={`${path}`} state={{ from: location }}>
            {label}
          </StyledLink>
        </SupportApplicationsItem>
      ))}
    </SupportApplicationsList>
  );
};

export default SupportApplicationsItems;
