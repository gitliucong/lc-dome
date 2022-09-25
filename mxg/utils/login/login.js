import http from '@/common/js/request.js'

// 详情
async function detail() {
	const {data} = await http.get('/course/api/course/null')
	return data
}
async function logins(mobile,code) {
 const {data} = await http.post('auth/login',{mobile, code})
 return data
}

export {
	logins
}