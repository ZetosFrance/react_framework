import service from '@/utils/https.js';

export function getInfo(data = {}) {
  return service({
    url: '/getInfo',
    method: 'post',
    data,
  });
}
