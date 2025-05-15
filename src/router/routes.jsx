// src/router/routes.jsx
import React, { lazy, Suspense } from 'react';
import RouteGuard from './RouteGuard';

// 按需懒加载组件
const App = lazy(() => import('../App'));
const Home = lazy(() => import('../pages/Home'));
const Login = lazy(() => import('../pages/Login'));
const Profile = lazy(() => import('../pages/Profile'));
const NotFound = () => <div>404 - Not Found</div>;

// 通用的 Suspense 包装器
function withSuspense(Component) {
  return (
    <Suspense fallback={<div>加载中...</div>}>
      <Component />
    </Suspense>
  );
}

const routes = [
  {
    path: '/',
    element: <RouteGuard>{withSuspense(App)}</RouteGuard>,
    children: [
      {
        index: true,
        element: withSuspense(Home),
      },
      { path: 'profile', element: withSuspense(Profile) },
    ],
  },
  {
    path: '/login',
    element: withSuspense(Login),
  },
  {
    path: '*',
    element: <NotFound />,
  },
];

export default routes;
