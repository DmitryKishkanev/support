import { useParams, useNavigate } from 'react-router-dom';
import { supportConfig } from '@/routes/supportConfig';

export const ApplicationMoreDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const item = supportConfig.find(el => el.path === id);

  const handleClose = () => {
    navigate(`/SupportApplications/${id}`);
  };

  return (
    <div>
      <h4>Component description: {item.label}</h4>
      <p>{item.description}</p>
      <button type="button" onClick={handleClose}>
        Close
      </button>
    </div>
  );
};
