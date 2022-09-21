import http from '@/common/js/request.js'
/* 轮播图 */
async function getBanner(){
    const {data} = await http.get('article/api/advert/show/1')
    return data   
}
/* 中部导航列表 */
async function getList(){
    const {data} = await http.get('article/api/category/label/list')
    return data   
}
/* 热门推荐 */
async function getHot(msg){
    const {data} = await http.post('course/api/course/search', msg)
    return data   
}
/* 免费精选 */
async function getFree(msg){
    const {data} = await http.post('course/api/course/search', msg)
    return data   
}
/* 付费精品 */
async function getPay(page, pageSize){
    const {data} = await http.post('course/api/course/search', {current: page, size: pageSize})
    return data   
}
/* 最近上新 */
async function getLately(msg){
    const {data} = await http.post('course/api/course/search', msg)
    return data   
}
export {
	getBanner,
	getList,
	getHot,
	getFree,
	getPay,
	getLately,
	
}