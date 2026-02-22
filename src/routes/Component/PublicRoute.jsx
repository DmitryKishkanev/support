import { useSelector } from 'react-redux';
import { Outlet, Navigate } from 'react-router-dom';
import { getIsLoggedIn } from '@/redux/auth';

export default function PublicRoute() {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return isLoggedIn ? <Navigate to="/" /> : <Outlet />;
}

// Если оборачивать отдельно каждый маршрут, что бы залогированного пользователя пербрасывало куда мы укажем
// export default function PublicRoute({
//   children,
//   restricted = false,
//   redirectTo = '/',
// }) {
//   const isLoggedIn = useSelector(getIsLoggedIn);
//   const shouldRedirect = isLoggedIn && restricted;
//   return shouldRedirect ? <Navigate to={redirectTo} /> : children;
// }

// и пример использования
{
  /* <Route
  path="login"
  element={
    <PublicRoute restricted redirectTo="/SupportApplications">
      <LoginPage />
    </PublicRoute>
  }
/>

<Route
  path="register"
  element={
    <PublicRoute restricted redirectTo="/SupportApplications">
      <RegisterPage />
    </PublicRoute>
  }
/>

<Route
  index
  element={
    <PublicRoute>
      <HomePage />
    </PublicRoute>
  }
/> */
}
