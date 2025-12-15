import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from 'components/Layout';
import style from 'components/App/App.module.css';

const Home = lazy(() => import('@/pages/Home'));
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
          <Route index element={<Home />} />
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
        </Route>
      </Routes>
    </div>
  );
}
