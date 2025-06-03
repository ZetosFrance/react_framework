// src/router/RouteGuard.jsx
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useUserStore } from '../store/useUserStore';

export default function RouteGuard({ children }) {
  const { token } = useUserStore();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // const publicPaths = ["/login"]
    // const isPublic = publicPaths.includes(location.pathname)
    // if (!isPublic && !token) {
    //   navigate("/login", { replace: true })
    // }
    console.log(token);
  }, [location.pathname, token, navigate]);

  return children;
}
