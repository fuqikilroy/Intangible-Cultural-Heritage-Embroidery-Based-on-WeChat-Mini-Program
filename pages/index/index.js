// pages/index/index.js
var common = require('../../utils/common.js') //引用公共JS文件
const db=wx.cloud.database()
const news =db.collection('k')

var row = 5//每次读取的新闻数量
var page = 0 //当前是第几页

Page({

  /**
   * 页面的初始数据
   */
  data: {
    //幻灯片素材
    swiperImg: [{
        src: '../../images/swiperImg (1).jpg'
      },
      {
        src: '../../images/swiperImg (2).jpg'
      },
      {
        src: '../../images/swiperImg (3).jpg'
      },
      {
        src: '../../images/swiperImg (4).jpg'
      },
      {
        src: '../../images/swiperImg (5).jpg'
      },
      {
        src: '../../images/swiperImg (6).jpg'
      },
      {
        src: '../../images/swiperImg (7).jpg'
      }
    ],
    list: [{
      id: '1001',
      title: '广绣',
      poster:'cloud://kilroy-4gm3nfj8b4b93d50.6b69-kilroy-4gm3nfj8b4b93d50-1325522969/video/01.png',
      videoUrl: 'cloud://kilroy-4gm3nfj8b4b93d50.6b69-kilroy-4gm3nfj8b4b93d50-1325522969/video/01.mp4'
    },
    {
      id: '1002',
      title: '四大名绣针尖上的艺术心尖上的美学',
      poster:'cloud://kilroy-4gm3nfj8b4b93d50.6b69-kilroy-4gm3nfj8b4b93d50-1325522969/video/02.png',
      videoUrl: 'cloud://kilroy-4gm3nfj8b4b93d50.6b69-kilroy-4gm3nfj8b4b93d50-1325522969/video/02.mp4'
    },
    {
      id: '1003',
      title: '四大名绣到底能有多美？',
      poster:'cloud://kilroy-4gm3nfj8b4b93d50.6b69-kilroy-4gm3nfj8b4b93d50-1325522969/video/03.png',
      videoUrl: 'cloud://kilroy-4gm3nfj8b4b93d50.6b69-kilroy-4gm3nfj8b4b93d50-1325522969/video/03.mp4'
    },
    {
      id: '1004',
      title: '非物质文化遗产 粤绣',
      poster:'cloud://kilroy-4gm3nfj8b4b93d50.6b69-kilroy-4gm3nfj8b4b93d50-1325522969/video/04.png',
      videoUrl: 'cloud://kilroy-4gm3nfj8b4b93d50.6b69-kilroy-4gm3nfj8b4b93d50-1325522969/video/04.mp4'
    },
    {
      id: '1005',
      title: '熊猫刺绣',
      poster:'cloud://kilroy-4gm3nfj8b4b93d50.6b69-kilroy-4gm3nfj8b4b93d50-1325522969/video/05.png',
      videoUrl:'cloud://kilroy-4gm3nfj8b4b93d50.6b69-kilroy-4gm3nfj8b4b93d50-1325522969/video/05.mp4'
    },
    {
      id: '1006',
      title: '粤绣',
      poster:'cloud://kilroy-4gm3nfj8b4b93d50.6b69-kilroy-4gm3nfj8b4b93d50-1325522969/video/06.png',
      videoUrl:'cloud://kilroy-4gm3nfj8b4b93d50.6b69-kilroy-4gm3nfj8b4b93d50-1325522969/video/06.mp4'
    },
    {
      id: '1007',
      title: '双面绣',
      poster:'cloud://kilroy-4gm3nfj8b4b93d50.6b69-kilroy-4gm3nfj8b4b93d50-1325522969/video/07.png',
      videoUrl:'cloud://kilroy-4gm3nfj8b4b93d50.6b69-kilroy-4gm3nfj8b4b93d50-1325522969/video/07.mp4'
    },
    ],
  },


  /**
   * 自定义函数
   */
  //-跳转Detail页面
  goToDetail: function(e) {
    //console.log(e.currentTarget.dataset.id)
    common.goToDetail(e.currentTarget.dataset.id)
  },

  //--跳转jigsaw页面
  goToJigsaw: function() {
    wx.navigateTo({
      url: '../jigsaw/jigsaw'
    })
  },

  //--跳转video页面
  goToVideo: function(e) {
    console.log(e)
    console.log(111)
    wx.setStorageSync('videoUrl', e.currentTarget.dataset.url)
    wx.navigateTo({
      url: '../video/video',
      //common.goToDetail(e.currentTarget.dataset.id)
      });
  },

  //--跳转numguess页面
  goToNumguess: function() {
    wx.navigateTo({
      url: '../numguess/numguess'
    })
  },




 








  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    news.limit(row).get({
      success: res => {
        this.setData({
          newsList: res.data
        })
      }
    })
  },
    //更新列表数据

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
    // 翻下一页
    page++
    // 获取当前页面的新闻记录
    news.skip(row * page).limit(row).get({
      success: res => {
        // 获取原有的新闻记录
        let old_data = this.data.newsList
        // 获取新页面的新闻记录
        let new_data = res.data
        // 更新首页新闻列表
        this.setData({
          newsList: old_data.concat(new_data)
        })
      }
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})