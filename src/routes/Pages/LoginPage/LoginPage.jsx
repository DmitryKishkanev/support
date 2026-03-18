import BeeSupportLoginForm from '@/routes/Component/BeeSupportLoginForm';
import { LoginPageBackdrop } from '@/routes/Pages/LoginPage/LoginPage.styled';

const LoginPage = () => {
  return (
    <LoginPageBackdrop>
      <BeeSupportLoginForm />
    </LoginPageBackdrop>
  );
};

export default LoginPage;
