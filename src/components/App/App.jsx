import { lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes, Navigate } from 'react-router-dom';
import Layout from '@/routes/Component/Layout';
import style from 'components/App/App.module.css';
// import PrivateRoute from '@/routes/Component/PrivateRoute';
// import PublicRoute from '@/routes/Component/PublicRoute';
import { refreshCurrentUser } from '@/redux/auth';
import { useAuth } from '@/redux/auth/useAuth';
import { PrivateRoute } from '@/routes/Component/PrivateRoute';
import { RestrictedRoute } from '@/routes/Component/RestrictedRoute';

const LoginPage = lazy(() => import('@/routes/Pages/LoginPage'));
const RegisterPage = lazy(() => import('@/routes/Pages/RegisterPage'));
const HomePage = lazy(() => import('@/routes/Pages/HomePage'));
const SupportApplications = lazy(
  () => import('@/routes/Pages/SupportApplications'),
);
const SupportApplicationsDetails = lazy(
  () => import('@/routes/Pages/SupportApplicationsDetails'),
);
// Пример именованного экспорта
const ApplicationMoreDetails = lazy(() =>
  import('@/routes/Component/ApplicationMoreDetails/ApplicationMoreDetails').then(
    module => ({
      ...module,
      default: module.ApplicationMoreDetails,
    }),
  ),
);

export default function App() {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();
  // При перезагрузке страницы возвращаем пользователя
  useEffect(() => {
    dispatch(refreshCurrentUser());
  }, [dispatch]);

  return (
    // Добавляем проверку isRefreshing, что бы убирать мигание странички Login
    !isRefreshing && (
      <div className={style.app}>
        <Routes>
          <Route path="/" element={<Layout />}>
            {/* Если HomePage, к примеру, должна быть не защищённым публичным маршрутом то её просто оставляем вне публичных/приватных маршрутов */}

            {/* Публичные маршруты */}
            <Route
              path="login"
              element={
                <RestrictedRoute
                  redirectTo="/SupportApplications"
                  component={<LoginPage />}
                />
              }
            />

            <Route
              path="register"
              element={
                <RestrictedRoute redirectTo="/" component={<RegisterPage />} />
              }
            />

            {/* Приватные маршруты  */}
            <Route
              index
              element={
                <PrivateRoute redirectTo="/login" component={<HomePage />} />
              }
            />

            <Route
              path="SupportApplications"
              element={
                <PrivateRoute
                  redirectTo="/login"
                  component={<SupportApplications />}
                />
              }
            />

            <Route
              path="SupportApplications/:id"
              element={
                <PrivateRoute
                  redirectTo="/login"
                  component={<SupportApplicationsDetails />}
                />
              }
            >
              <Route
                path="ApplicationMoreDetails"
                element={
                  <PrivateRoute
                    redirectTo="/login"
                    component={<ApplicationMoreDetails />}
                  />
                }
              />
            </Route>

            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </div>
    )
  );
}
