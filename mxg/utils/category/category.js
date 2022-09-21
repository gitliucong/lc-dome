import http from '@/common/js/request.js'

async function getCategory(){
    const {data} = await http.get('article/api/category/label/list')
    return data   
}

export {
	getCategory
	
}