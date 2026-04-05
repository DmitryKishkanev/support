import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import BeeSupportLoginForm from '@/routes/Component/BeeSupportLoginForm';
import { LoginPageBackdrop } from '@/routes/Pages/LoginPage/LoginPage.styled';

const LoginPage = () => {
  const navigate = useNavigate();

  const handleKeyDown = event => {
    if (event.code === 'Escape') {
      navigate('/SupportApplications', { replace: true });
    }
  };

  const handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      navigate('/SupportApplications', { replace: true });
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
    // Не ставим handleKeyDown в зависимости useEffect,
    // потому что функция пересоздаётся на каждом рендере,
    // и эффект будет постоянно отписывать/подписывать слушатель заново.
    // Нам нужен один слушатель при монтировании, поэтому оставляем [].
  }, []);

  return (
    <LoginPageBackdrop onClick={handleBackdropClick}>
      <BeeSupportLoginForm />
    </LoginPageBackdrop>
  );
};

export default LoginPage;
