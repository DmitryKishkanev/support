import {
  SupportApplicationsList,
  SupportApplicationsItem,
  StyledNavLink,
} from 'components/SupportApplicationsItems.styled';

const SupportApplicationsItems = ({ supportConfig }) => {
  return (
    <SupportApplicationsList>
      {supportConfig.map(({ path, label }) => (
        <SupportApplicationsItem key={path}>
          <StyledNavLink to={`/SupportApplications/${path}/${path}`}>
            {label}
          </StyledNavLink>
        </SupportApplicationsItem>
      ))}
    </SupportApplicationsList>
  );
};

export default SupportApplicationsItems;
