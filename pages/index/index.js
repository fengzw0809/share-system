Page({
  data: {},
  onLoad: function() {},
  onReady: function(e) {
    this.mapCtx = wx.createMapContext('myMap');
    this.mapCtx.moveToLocation()
  },
  moveToLocation: function () {
    this.mapCtx.moveToLocation()
  },
  scanCode: function() {
    wx.scanCode({
      onlyFromCamera: true,
      success(res) {
        console.log(res)
      }
    })
  },
  navigateToLocationList: function() {
    wx.navigateTo({
      url: '/pages/locationList/locationList',
    })
  }
})