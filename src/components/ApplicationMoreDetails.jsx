import { useParams, useNavigate } from 'react-router-dom';
import { supportConfig } from '@/routes/supportConfig';
import { Container } from 'components/ApplicationMoreDetails.styled';

export const ApplicationMoreDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const item = supportConfig.find(el => el.path === id);

  const handleClose = () => {
    navigate(`/SupportApplications/${id}`);
  };

  return (
    <Container>
      <h4>Component description: {item.label}</h4>
      <p>{item.description}</p>
      <button type="button" onClick={handleClose}>
        Close
      </button>
    </Container>
  );
};
