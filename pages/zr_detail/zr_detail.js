// pages/zr_detail/zr_detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
     art: {},
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    wx.request({
      url: 'http://news-at.zhihu.com/api/4/news/' + options.id,
      headers: {
        'Content-Type': 'application/json'
      },
      success(res) {
        if (res.data.body) {
          var body = res.data.body;
          body = body.match(/<p>.*?<\/p>/g);
          var ss = [];
          if (body) {
            for (var i = 0, len = body.length; i < len; i++) {
              ss[i] = /<img.*?>/.test(body[i]);
              if (ss[i]) {
                body[i] = body[i].match(/(http:|https:).*?\.(jpg|jpeg|gif|png)/);
              } else {
                body[i] = body[i].replace(/<p>/g, '')
                  .replace(/<\/p>/g, '')
                  .replace(/<strong>/g, '')
                  .replace(/<\/strong>/g, '')
                  .replace(/<a.*?\/a>/g, '')
                  .replace(/&nbsp;/g, ' ')
                  .replace(/&ldquo;/g, '"')
                  .replace(/&rdquo;/g, '"');
              }
            }
          }
          res.data.body = body
        }
        that.setData({
          art: res.data
        })
      }
    })
  },


  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    wx.setNavigationBarTitle({
      title: '详情页面'
    })
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