import {request} from './request';

export function login(prams){
  return request({
    method: 'post',
    url: '/login',
    data: prams
  })
} 