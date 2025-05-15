import { create } from 'zustand';
import { persist } from 'zustand/middleware';

// 定义 Store
export const useUserStore = create(
  persist(
    (set) => ({
      user: null,
      token: '',
      num: 0,
      addNum: () => set((state) => ({ num: state.num + 1 })),
      setUser: (user) => set({ user }),
      setToken: (token) => set({ token }),
      clearAuth: () => set({ user: null, token: '' }),
    }),
    {
      name: 'userStore', // localStorage key
      getStorage: () => localStorage,
    }
  )
);
