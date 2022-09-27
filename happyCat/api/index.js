import { request } from './request'
const api = require('../../api/index')
module.exports = {
  // 获取报废地点
  queryAddressList: (data) => request('/company/getlist', 'GET', data),
}