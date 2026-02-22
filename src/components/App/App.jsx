import { lazy, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes, Navigate } from 'react-router-dom';
import Layout from '@/routes/Component/Layout';
import style from 'components/App/App.module.css';
import PrivateRoute from '@/routes/Component/PrivateRoute';
import PublicRoute from '@/routes/Component/PublicRoute';
import { refreshCurrentUser, getIsRefreshing } from '@/redux/auth';

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
  const isRefreshing = useSelector(getIsRefreshing);
  // При перезагрузке страницы возвращаем пользователя
  useEffect(() => {
    dispatch(refreshCurrentUser());
  }, [dispatch]);

  return (
    !isRefreshing && (
      <div className={style.app}>
        <Routes>
          <Route path="/" element={<Layout />}>
            {/* Если HomePage, к примеру, должна быть не защищённым публичным маршрутом то её просто оставляем вне публичных/приватных маршрутов */}
            {/* Публичные маршруты */}
            <Route element={<PublicRoute />}>
              <Route path="login" element={<LoginPage />} />
              <Route path="register" element={<RegisterPage />} />
            </Route>

            {/* Приватные маршруты  */}
            <Route element={<PrivateRoute />}>
              <Route index element={<HomePage />} />
              <Route
                path="SupportApplications"
                element={<SupportApplications />}
              />
              <Route
                path="SupportApplications/:id"
                element={<SupportApplicationsDetails />}
              >
                <Route
                  path="ApplicationMoreDetails"
                  element={<ApplicationMoreDetails />}
                />
              </Route>
            </Route>
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </div>
    )
  );
}
