import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/redux/auth/useAuth';

const useLogOutRedirect = () => {
  const navigate = useNavigate();
  const { isLoggedIn } = useAuth();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/login', { replace: true });
    }
  }, [isLoggedIn, navigate]);
};

export default useLogOutRedirect;
