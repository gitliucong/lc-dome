import http from '@/common/js/request.js'
/* 热门问答 */
async function getHots(page, pagesize){
    const {data} = await http.post('question/api/question/hot',{current: page, size: pagesize})
    return data   
}


export {
	getHots
	
}