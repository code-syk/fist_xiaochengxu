// pages/insp/insp1.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showAside:true,
    btn_id:1,
    zd_lx:true,
    wd_wk:false,
    saoma:'',
    src:'',
    src1:''
  },
  click_btn(e){
    console.log(e.target.dataset.btn);
    if (e.target.dataset.btn == 1){
      this.setData({
        btn_id:e.target.dataset.btn,
        zd_lx:true,
        wd_wk:false,
      })
    }else{
      this.setData({
        btn_id:e.target.dataset.btn,
        zd_lx:false,
        wd_wk:true,
      })
    }
    console.log(this.data.zd_lx);
  },
  saoma(){
     let saoma_data = this
     wx.scanCode({
      onlyFromCamera: true,
      success (res) {
        saoma_data.setData({
          saoma:res.result
        })
      }
    })
  },
  takePhoto(e)
  {
      var that=this;
      wx.chooseImage({
        count: 1,
        sizeType: ['original', 'compressed'],
        sourceType: ['album', 'camera'],
        success (res) {
          // tempFilePath可以作为img标签的src属性显示图片
          console.log(e.target.dataset.src)
          if(e.target.dataset.src == 'src'){
            that.setData({
              src:res.tempFilePaths
            })
          }else{
            that.setData({
              src1:res.tempFilePaths
            })
          }
        }
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