Page({

  /**
   * 页面的初始数据
   */
  data: {
    order: {
      id: '2647-5209-9469',
      borrowTime: '2016-06-17 04:00',
      returnTime: '2016-06-17 04:00',
      status: 1,
      borrowLocation: '北京市',
      returnLocation: '北京市',
      duration: '46',
      price: '2.00',
      discount: '1.00',
      accountPayable: '1.00'
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options.id)
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