// import { Navigate, Outlet, useLocation } from 'react-router-dom';
// import { useAuthStore } from './AuthProvider';

// const RequireAuth = ({ allowedRoles }) => {
//   const { user, loading } = useAuthStore();
//   const location = useLocation();

//   if (loading) {
//     return <></>;
//   }

//   if (!user) {
//     return <Navigate to="/login" state={{ from: location }} replace />;
//   }
  
//   if (!allowedRoles.some((role) => user.roles.includes(role))) {
//     // Si no tiene los roles permitidos, redirige a una página no autorizada
//     return <Navigate to="/unauthorized" replace />;
//   }

//   return <Outlet />;
// };

// export default RequireAuth;