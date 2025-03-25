import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAuthStore } from './AuthProvider';

const RequireAuth = () => {
  const { user, loading } = useAuthStore();
  const location = useLocation();

  if (loading) {
    return <div className="text-center p-4">Cargando...</div>;
  }

  return user ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default RequireAuth;