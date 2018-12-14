// pages/order/order.js
Page({
  data: {
    selection: 'ongoing' || 'finished',
    ongoing_orders: [{
      id: '2647-5209-9469',
      borrowTime: '2016-06-17 04:00',
      status: 1,
      borrowLocation: '北京市',
      duration: '46'
    }, {
        id: '2647-5209-9469',
        borrowTime: '2016-06-17 04:00',
        status: 1,
        borrowLocation: '北京市',
        duration: '46'
      }],
    finished_orders: [{
      id: '2647-5209-9469',
      borrowTime: '2016-06-17 04:00',
      status: 0,
      borrowLocation: '北京市',
      price: '12.00'
    }, {
        id: '2647-5209-9469',
        borrowTime: '2016-06-17 04:00',
        status: 0,
        borrowLocation: '北京市',
        price: '12.00'
      }]
  },
  changeSelectionToFinished: function() {
    this.setData({
      selection: 'finished'
    })
  },
  changeSelectionToOngoing: function() {
    this.setData({
      selection: 'ongoing'
    })
  },
  navigateToOrderDetail: function(e) {
    wx.navigateTo({
      url: '/pages/orderDetail/orderDetail?id=' + e.target.dataset.id
    })
  }
})