import { Navigate } from "react-router-dom";

/**
 * Simulated authentication hook
 */
function useAuth() {
  const isAuthenticated = false; // mock auth state
  return { isAuthenticated };
}

function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
}

export default ProtectedRoute;