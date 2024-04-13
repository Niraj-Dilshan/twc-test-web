import { useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const ProtectedRoutes = ({ children }) => {
  const { isAuthenticated, loading, token } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && !isAuthenticated) {
      navigate("/login", { replace: true });
    }
  }, [isAuthenticated, navigate, loading, token]); // Add loading to the dependency array

  if (loading) {
    return <div>Loading...</div>; // Or some loading indicator
  }

  return children;
};

export default ProtectedRoutes;
