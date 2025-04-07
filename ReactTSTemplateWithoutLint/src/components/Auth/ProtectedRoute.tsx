import { ReactNode } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { RootState } from '../../redux/store';

type ProtectedRouteProps = {
  redirectPath?: string;
  children: ReactNode;
};

const ProtectedRoute = ({ redirectPath = '/', children }: ProtectedRouteProps): any => {
  const { isAuthenticated } = useSelector((state: RootState) => state.auth);
  const location = useLocation();
  if (!isAuthenticated) {
    return <Navigate to={redirectPath} replace state={{ from: location }} />;
  }

  return children ? children : <Outlet />;
};

export default ProtectedRoute;
