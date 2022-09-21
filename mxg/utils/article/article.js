import http from '@/common/js/request.js'
/* 导航列表 */
async function getArticle(){
    const {data} = await http.get('article/api/category/label/list')
    return data   
}
/* 阅读课程列表 */
async function getSearch(page, pagesize){
    const {data} = await http.post('article/api/article/search',{current: page, size: pagesize})
    return data   
}

export {
	getArticle,
	getSearch
	
}