import server from './http.js' //导入axios

//首页轮播
const carousel = () => {
   let data = server.post('/resources/carousel')
   return data
}
const login = (msg) => {
   let data = server.post('/users/login', msg)
   return data
}
const shoppingCart = (msg) => {
   let data = server.post('/user/shoppingCart/getShoppingCart', msg)
   return data
}
// 手机
const getCategoryName = (msg) => {
   let data = server.post('/product/getPromoProduct', msg)
   return data
}
// 家电
const getTvData = (msg) => {
   let data = server.post('/product/getPromoProduct', msg)
   return data
}
// 保护套
const getProtect = (msg) => {
   let data = server.post('/product/getPromoProduct', msg)
   return data
}
// 充电器
const getChargerData = (msg) => {
   let data = server.post('/product/getPromoProduct', msg)
   return data
}
//家电热门
const getTvhotData = (msg) => {
   let data = server.post('/product/getHotProduct', msg)
   return data
}
//配件热门
const getPartsData = (msg) => {
   let data = server.post('/product/getHotProduct', msg)
   return data
}
//全部商品
const getAllProduct = (msg) => {
   let data = server.post('/product/getAllProduct', msg)
   return data
}
//全部商品
const getProductByCategory = (msg) => {
   let data = server.post('/product/getProductByCategory', msg)
   return data
}
//分类
const getClassify = (msg) => {
   let data = server.post('/product/getCategory', msg)
   return data
}
//商品详情
const getDetails = (msg) => {
   let data = server.post('/product/getDetails', msg)
   return data
}
//商品详情图片轮播图
const getDetailsPicture = (msg) => {
   let data = server.post('/product/getDetailsPicture', msg)
   return data
}
//注册
const getRegister = (msg) => {
   let data = server.post('/users/register', msg)
   return data
}
//登录
const getLogin = (msg) => {
   let data = server.post('/users/login', msg)
   return data
}
//我的收藏
const getCollect = (msg) => {
   let data = server.post('/user/collect/getCollect', msg)
   return data
}
//购物车
const getShoppingCart = (msg) => {
   let data = server.post('/user/shoppingCart/getShoppingCart', msg)
   return data
}


export {
   carousel,
   login,
   shoppingCart,
   getCategoryName,
   getTvData,
   getProtect,
   getChargerData,
   getTvhotData,
   getPartsData,
   getClassify,
   getAllProduct,
   getProductByCategory,
   getDetails,
   getDetailsPicture,
   getRegister,
   getLogin,
   getCollect,
   getShoppingCart
}