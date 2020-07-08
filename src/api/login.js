import request from '@/utils/request.js'
export function apilogin ({ mobile, code }) {
  return request({
    url: '/mp/v1_0/authorizations',
    method: 'post',
    data: {
      mobile,
      code
    }
  })
}
export function apiyanzhengma ({ mobile }) {
  return request({
    url: '/mp/v1_0/sms/codes/:mobile',
    method: 'get',
    params: {
      mobile
    }

  })
}
