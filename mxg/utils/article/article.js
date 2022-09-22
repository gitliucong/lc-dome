import http from '@/common/js/request.js'
/* 导航列表 */
async function getArticle(){
    const {data} = await http.get('article/api/category/label/list')
    return data   
}
/* 阅读列表 */
async function getSearch(page, pagesize){
    const {data} = await http.post('article/api/article/search',{current: page, size: pagesize})
    return data   
}
/* 阅读文章详情 */
async function getContent(id){
    const {data} = await http.get(`article/api/article/${id}`)
    return data   
}
/* 阅读文章详情 - 评论*/
async function getContentList(id){
    const {data} = await http.get(`article/api/comment/list/${id}`)
    return data   
}

export {
	getArticle,
	getSearch,
	getContent,
	getContentList
	
}