// pages/cart/cart.js
var common = require('../../utils/common.js') //引用公共JS文件
const db=wx.cloud.database()
const news =db.collection('cart')


var row = 5//每次读取的新闻数量
var page = 0 //当前是第几页

Page({

  /**
   * 页面的初始数据
   */
  data: {
    isSearch:true,
    isClear:false,
    val:'',
    /*
    //商品信息
    goods_data:[{
      img_src:"https://img12.360buyimg.com/n7/jfs/t1/54452/19/13666/490944/5da54224Edc43739c/b65c3bfc1884be62.jpg",
      goods_name:"苏绣双面熊猫摆台手工刺绣摆件中国风工艺品新中式桌面礼物送朋友",
      goods_price:"100",
    },{
      img_src:"https://img12.360buyimg.com/n7/jfs/t1/54452/19/13666/490944/5da54224Edc43739c/b65c3bfc1884be62.jpg",
      goods_name:"苏绣双面熊猫摆台手工刺绣摆件中国风工艺品新中式桌面礼物送朋友",
      goods_price:"100",
    },
    ],
    */

    //公告数据列表
    msgList:[
      {title:"热烈欢迎您的到来！"},
      {title:"凡是618活动商品"},
      {title:"每满300减50！"},
      {title:"PLUS会员95折上享折上折！"},
      {title:"又便宜又好！抢超值优惠！"},
    ]
  },

  //得到输入的内容
  getInput:function(e){
    this.setData({
      val:e.detail.value
    })
    if(this.data.val.length > 0){
      this.setData({
        isSearch:false,
        isClear:true,
      })
    }else{
      this.setData({
        isSearch:true,
        isClear:false,})
      }
  },
  //清空内容
  clearTap:function(){
    this.setData({
      val:'',
      isSearch:true,
      isClear:false,
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */

  onLoad(options) {
    var dataArray = [];
    wx.cloud.database().collection('cart').get().then(res =>{
      var data = res.data;
      data.goods_list = res.data;
      console.log('请求成功',res)//res.data包含该记录的数据
      for(var i = 0;i < data.length;i++){
        dataArray.push(data[i]);
      }
      //console.log(dataArray);
      //console.log(data.goods_list);
    })
    setTimeout(() =>{
      this.setData({
        cartlist:dataArray,
      })
    },500)
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
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

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
  onShareAppMessage() {

  }
})