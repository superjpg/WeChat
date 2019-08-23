// pages/zr_thrm/zr_thrm.js

var app = getApp()
var utils = require('../../utils/util.js')
Page({

      /**
       * 页面的初始数据
       */
      data: {
        list: []
      },

      /**
       * 生命周期函数--监听页面加载
       */
      onLoad: function(options) {
        var that = this
        wx.request({
          url: 'https://news-at.zhihu.com/api/3/news/hot',
            headers: {
              'Content-Type': 'application/json'
            },
            success: function(res) {

              console.log(res.data.recent)
              that.setData({
                list: res.data.recent
              })
            }
        })
      },
      

          /**
           * 生命周期函数--监听页面初次渲染完成
           */
          onReady: function() {

          },

          /**
           * 生命周期函数--监听页面显示
           */
          onShow: function() {

          },

          /**
           * 生命周期函数--监听页面隐藏
           */
          onHide: function() {

          },

          /**
           * 生命周期函数--监听页面卸载
           */
          onUnload: function() {

          },

          /**
           * 页面相关事件处理函数--监听用户下拉动作
           */
          onPullDownRefresh: function() {

          },

          /**
           * 页面上拉触底事件的处理函数
           */
          onReachBottom: function() {

          },

          /**
           * 用户点击右上角分享
           */
          onShareAppMessage: function() {

          }
        })