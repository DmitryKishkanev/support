import { lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes, Navigate } from 'react-router-dom';
import Layout from '@/routes/Component/Layout';
import style from 'components/App/App.module.css';
import { refreshCurrentUser } from '@/redux/auth';

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
  // При перезагрузке страницы возвращаем пользователя
  useEffect(() => {
    dispatch(refreshCurrentUser());
  }, [dispatch]);

  return (
    <div className={style.app}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route index element={<HomePage />} />
          <Route path="SupportApplications" element={<SupportApplications />} />
          <Route
            path="SupportApplications/:id"
            element={<SupportApplicationsDetails />}
          >
            <Route
              path="ApplicationMoreDetails"
              element={<ApplicationMoreDetails />}
            />
          </Route>
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </div>
  );
}
