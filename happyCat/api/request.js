import { baseUrl } from './http.js'
 
module.exports = {
  request : function(url, methodType, data){
    let fullUrl = `${baseUrl}${url}`
    // let token = wx.getStorageSync('token') ? wx.getStorageSync('token')  : ''
    wx.showLoading({ title: "数据请求中"  });
    return new Promise((resolve,reject)=>{
      wx.request({
        url: fullUrl,
        methodType,
        data,
        header: {
          'content-type': 'application/json', // 默认值
          // 'x-api-key': token,
        },
        success(res){
          if (res.data.status == 200) {
            resolve(res.data)
            wx.hideLoading()
          }else{
            wx.hideLoading()
            wx.showToast({
              title: res.data.msg,
              icon:'none'
            })
            reject(res.data.message)
          }
        },
        fail(){
          wx.showToast({
            title: '接口请求错误',
            icon:'none'
          })
          reject('接口请求错误')
        }
      })
    })
  }
}