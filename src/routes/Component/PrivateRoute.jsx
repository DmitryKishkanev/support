import { Navigate } from 'react-router-dom';
import { useAuth } from '@/redux/auth/useAuth';

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isLoggedIn, isRefreshing } = useAuth();
  const shouldRedirect = !isLoggedIn && !isRefreshing;

  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};

export const PrivateRouteWithChildren = ({ children }) => {
  const { isLoggedIn, isRefreshing } = useAuth();
  const shouldRedirect = !isLoggedIn && !isRefreshing;

  return shouldRedirect ? <Navigate to="/login" /> : children;
};

// import { Outlet, Navigate } from 'react-router-dom';
// import { useAuth } from '@/redux/auth/useAuth';

// export default function PublicRoute() {
//   const { isLoggedIn } = useAuth();
//   return isLoggedIn ? <Navigate to="/" /> : <Outlet />;
// }

// import { Outlet, Navigate } from 'react-router-dom';
// import { useAuth } from '@/redux/auth/useAuth';

// export default function PrivateRoute() {
//   const { isLoggedIn } = useAuth();
//   return isLoggedIn ? <Outlet /> : <Navigate to="login" replace />;
// }

// Пример использования
// !isRefreshing && (
//   <div className={style.app}>
//     <Routes>
//       <Route path="/" element={<Layout />}>
//         {/* Если HomePage, к примеру, должна быть не защищённым публичным маршрутом то её просто оставляем вне публичных/приватных маршрутов */}
//         {/* Публичные маршруты */}
//         <Route element={<PublicRoute />}>
//           <Route path="login" element={<LoginPage />} />
//           <Route path="register" element={<RegisterPage />} />
//         </Route>

//         {/* Приватные маршруты  */}
//         <Route element={<PrivateRoute />}>
//           <Route index element={<HomePage />} />
//           <Route
//             path="SupportApplications"
//             element={<SupportApplications />}
//           />
//           <Route
//             path="SupportApplications/:id"
//             element={<SupportApplicationsDetails />}
//           >
//             <Route
//               path="ApplicationMoreDetails"
//               element={<ApplicationMoreDetails />}
//             />
//           </Route>
//         </Route>

//         <Route path="*" element={<Navigate to="/" replace />} />
//       </Route>
//     </Routes>
//   </div>
// )
