import { Outlet, Navigate } from 'react-router-dom';
import { useAuth } from '@/redux/auth/useAuth';

export default function PublicRoute() {
  const { isLoggedIn } = useAuth();
  return isLoggedIn ? <Navigate to="/" /> : <Outlet />;
}

// Если оборачивать отдельно каждый маршрут, что бы залогированного пользователя пербрасывало куда мы укажем
// export default function PublicRoute({
//   component: Component,
//   redirectTo = '/',
// }) {
//   const { isLoggedIn } = useAuth();
//   return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
// }

// и пример использования
//    <Route
//   path="login"
//   element={
//     <PublicRoute redirectTo="/SupportApplications" component={ <LoginPage />} />
//   }
// />

// <Route
//   path="register"
//   element={
//     <PublicRoute redirectTo="/SupportApplications" component={ <RegisterPage />} />
//   }
// />
