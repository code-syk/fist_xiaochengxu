// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userName:"zhangsan",
    userPassword:"123456",
    passTips:false
  },
  //登录事件
  login_click(){
    console.log(this.data);
    if(this.data.userName === 'zhangsan' && this.data.userPassword ==='123456'){
      console.log('登录成功')
      this.setData({
        passTips:false
      })
      wx.navigateTo({
        url: '../workbench/workbench',
      })
    }else{
      this.setData({
        passTips:true
      })
      console.log('账号密码错误')
    }
  },
  //输入框数据变动事件,账号
  login_user(e){
      this.setData({
        userName:e.detail.value
      })
  },
  //输入框数据变动事件，密码
  login_password(e){
    this.setData({
      userPassword:e.detail.value
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})


// "tabBar": {
//   "list": [
//     {
//       "pagePath": "pages/index/index",
//       "text": "设备/巡检",
//       "iconPath": "assets/images/tabbar/home.png",
//       "selectedIconPath": "assets/images/tabbar/home_active.png"
//      }
//   ]
// }