// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, useRoutes } from 'react-router-dom';
import routes from './router/routes';
import './index.css';
import 'virtual:svg-icons-register';

function AppRouter() {
  // 根据配置直接渲染整棵路由树
  return useRoutes(routes);
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  </React.StrictMode>
);
