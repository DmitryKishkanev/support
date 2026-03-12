import BeeSupportLoginForm from '@/routes/Component/BeeSupportLoginForm';
import { LoginPageBox } from '@/routes/Pages/LoginPage/LoginPage.styled';

const LoginPage = () => {
  return (
    <div>
      <LoginPageBox>
        <BeeSupportLoginForm />
      </LoginPageBox>
    </div>
  );
};

export default LoginPage;
