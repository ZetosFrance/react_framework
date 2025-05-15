import axios from 'axios';
import { useStore } from '../store/useStore';

const service = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// 请求拦截器
service.interceptors.request.use(
  (config) => {
    const token = useStore.getState().token;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    // TODO: 补充逻辑
    return config;
  },
  (error) => Promise.reject(error)
);

// 响应拦截器
service.interceptors.response.use(
  (response) => response,
  (error) => {
    // 全局错误处理：401 登出、其它提示等
    // if (error.response?.status === 401) { ... }
    return Promise.reject(error);
  }
);

export default service;
