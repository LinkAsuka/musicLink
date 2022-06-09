import request from './request'

/**
 * @description 登录
 */
export function login(data) {
    return request.get(`/?json=true`)
}