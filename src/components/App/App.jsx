import { lazy } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Layout from 'components/Layout';
import style from 'components/App/App.module.css';

const LoginPage = lazy(() => import('@/pages/LoginPage'));
const RegisterPage = lazy(() => import('@/pages/RegisterPage'));
const HomePage = lazy(() => import('@/pages/HomePage'));
const SupportApplications = lazy(() => import('@/pages/SupportApplications'));
const SupportApplicationsDetails = lazy(() =>
  import('@/pages/SupportApplicationsDetails'),
);

const ApplicationMoreDetails = lazy(() =>
  import('components/ApplicationMoreDetails').then(module => ({
    ...module,
    default: module.ApplicationMoreDetails,
  })),
);

export default function App() {
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
