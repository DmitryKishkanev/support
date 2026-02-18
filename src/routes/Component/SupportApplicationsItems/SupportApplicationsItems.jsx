import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  SupportApplicationsList,
  SupportApplicationsItem,
  StyledLink,
} from '@/routes/Component/SupportApplicationsItems/SupportApplicationsItems.styled';

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

SupportApplicationsItems.propTypes = {
  supportConfig: PropTypes.arrayOf(
    PropTypes.shape({
      path: PropTypes.string.isRequired,
      label: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default SupportApplicationsItems;
