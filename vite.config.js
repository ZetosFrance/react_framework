import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { chunkSplitPlugin } from 'vite-plugin-chunk-split';
import eslintPlugin from 'vite-plugin-eslint';
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default () => {
  return defineConfig({
    plugins: [
      react(),
      chunkSplitPlugin({
        customSplitting: {
          'react-vendor': [/node_modules\/react/, /node_modules\/react-dom/], // 拆分 react 和 react-dom
          utils: [/src\/utils/, /src\/components/], // 拆分 utils 和 components
        },
      }),
      eslintPlugin(),
      createSvgIconsPlugin({
        iconDirs: [path.resolve(__dirname, 'src/assets/svg')],
        symbolId: 'icon-[dir]-[name]',
        inject: 'body-last',
        customDomId: '__svg_icons',
      }),
      tailwindcss(),
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
    server: {
      proxy: {
        '^/api': {
          target: 'https://api.example.com',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ''),
        },
      },
      host: '0.0.0.0',
      port: '1234',
    },
    build: {
      sourcemap: true,
      minify: 'terser',
    },
    esbuild: {
      pure: ['console'],
    },
  });
};
