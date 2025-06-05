import { useMemo } from 'react';

// 预加载所有图片资源
const images = import.meta.glob('/src/assets/images/**/*', {
  eager: true,
  as: 'url',
});

export default function useImage(path, fileName = '') {
  return useMemo(() => {
    const basePath = fileName ? `${fileName}/` : '';
    const fullPath = `/src/assets/images/${basePath}${path}`;

    // 从预加载的图片中查找
    return images[fullPath] || '';
  }, [path, fileName]);
}
