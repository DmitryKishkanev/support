import { Outlet, Navigate } from 'react-router-dom';
import { useAuth } from '@/redux/auth/useAuth';

export default function PrivateRoute() {
  const { isLoggedIn } = useAuth();
  return isLoggedIn ? <Outlet /> : <Navigate to="login" replace />;
}
