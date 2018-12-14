// pages/mine/mine.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: null,
    
    // 从服务器获取的用户信息
    openId: '',
    user: {
      isDepositPaid: false
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      userInfo: app.globalData.userInfo
    })
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

  },

  navigateToOrder: function() {
    wx.switchTab({
      url: '/pages/orderList/orderList',
    })
  },
  navigateToDeposit: function() {
    wx.navigateTo({
      url: '/pages/mine/deposit/deposit',
    })
  },
  navigateToCoupon: function () {
    wx.navigateTo({
      url: '/pages/mine/couponList/couponList',
    })
  }
})