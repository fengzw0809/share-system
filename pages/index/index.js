Page({
  data: {},
  onLoad: function() {},
  onReady: function(e) {
    this.mapCtx = wx.createMapContext('myMap');
    this.mapCtx.moveToLocation()
  },
  moveToLocation() {
    this.mapCtx.moveToLocation()
  }
})