import http from '@/common/js/request.js'

// 我的余额
async function balance() {
 const {data} = await http.get('pay/user/balance')
 return data
}
// 我的订单
async function getOrder() {
 const {data} = await http.get('pay/order/user/list')
 return data
}

export {
	balance,
	getOrder
}