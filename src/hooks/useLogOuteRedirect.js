import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from '@/redux/auth';

const useLogOutRedirect = () => {
  const navigate = useNavigate();
  const isLoggedIn = useSelector(getIsLoggedIn);

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/login', { replace: true });
    }
  }, [isLoggedIn, navigate]);
};

export default useLogOutRedirect;
