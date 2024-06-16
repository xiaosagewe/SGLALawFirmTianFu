import request from '@/utils/request';

//登录
export function login(data) {
  return request({
    url: '/covid/auth/login ',
    method: 'post',
    data
  });
}