import { useMemo } from 'react';

export default function useImage(path, fileName = '') {
  return useMemo(() => {
    const basePath = fileName ? `${fileName}/` : '';
    const imagePath = `/src/assets/images/${basePath}${path}`;
    return new URL(imagePath, import.meta.url).href;
  }, [path, fileName]);
}
