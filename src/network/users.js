import { request } from './request';

export function getUsers() {
    return request({
        method: 'get',
        url: '/users',
        params: {
            query: '',
            pagenum: 1,
            pagesize: 2
        }
    })
}