//index.js
// 生成随机颜色
//let命令，用来声明变量。它的用法类似于var，但是所声明的变量，只在let命令所在的代码块内有效。
function getRandomColor(){
  let rgb = []
  for(let i=0;i<3;i++){
    let color = Math.floor(Math.random()*256).toString(16)
    // 三目运算法
    color = color.length==1?'0'+color:color
    rgb.push(color)
  }

  return '#'+rgb.join('')
}

Page({

  /**
   * 页面的初始数据
   */
  data: {
    danmuTxt:'',
    list: [{
        id: '1001',
        title: '杨国宜先生口述校史实录',
        videoUrl: 'http://arch.ahnu.edu.cn/__local/6/CB/D1/C2DF3FC847F4CE2ABB67034C595_025F0082_ABD7AE2.mp4?e=.mp4'
      },
      {
        id: '1002',
        title: '唐成伦先生口述校史实录',
        videoUrl: 'http://arch.ahnu.edu.cn/__local/E/31/EB/2F368A265E6C842BB6A63EE5F97_425ABEDD_7167F22.mp4?e=.mp4'
      },
      {
        id: '1003',
        title: '倪光明先生口述校史实录',
        videoUrl: 'http://arch.ahnu.edu.cn/__local/9/DC/3B/35687573BA2145023FDAEBAFE67_AAD8D222_925F3FF.mp4?e=.mp4'
      },
      {
        id: '1004',
        title: '吴仪兴先生口述校史实录',
        videoUrl: 'http://arch.ahnu.edu.cn/__local/5/DA/BD/7A27865731CF2B096E90B522005_A29CB142_6525BCF.mp4?e=.mp4'
      }
    ],
    pinglun:[
      {
        id:"20001",
        image_url:"https://profile-avatar.csdnimg.cn/28b698c3475644be96fafd695e790f53_kilroy_7.jpg!1",
        users_name:"抚七",
        text:"哇，这也太厉害了，而且没绣之前就有那么多步，后面那么灵动的居然是绣出来的简直是巧夺天工啊！感谢姚老师一直在坚持传承我们国家这种独有的艺术！",
        add_time:"2023-6-8 12:08"
      },
      {
        id:"20002",
        image_url:"https://t11.baidu.com/it/u=556959434,217221814&fm=30&app=106&f=JPEG?w=640&h=644&s=AFDAA35F4D3BE6CE0CE511640300A070",
        users_name:"kilroy",
        text:"我们的，最好的!",
        add_time:"2023-5-8 02:08"
      },
      {
        id:"20003",
        image_url:"https://img2.baidu.com/it/u=361362612,3401838859&fm=253&fmt=auto&app=138&f=JPEG?w=200&h=200",
        users_name:"Lisir",
        text:"看这一针一线，突然就想起我的好婆，小时候就喜欢在边上看着她一针一针的刺绣，感觉世界都是安静的。",
        add_time:"2023-3-8 03:07"
      },
    ],

  },

  /**
   * 自定义函数--播放视频
   */
  playVideo: function(e) {
    // console.log(e.currentTarget.dataset.url)

    // 停止正在播放的视频
    this.videoCtx.stop()

    // 更新视频地址
    this.setData({
      src:wx.getStorageSync('videoUrl')
      //'http://arch.ahnu.edu.cn/__local/6/CB/D1/C2DF3FC847F4CE2ABB67034C595_025F0082_ABD7AE2.mp4?e=.mp4'

    })

    // 播放新的视频
    this.videoCtx.play()
  },

  /**
 * 自定义函数--获取弹幕内容
 */
  getDanmu: function (e) {
    this.setData({
      danmuTxt:e.detail.value
    })
  },

  /**
* 自定义函数--发送弹幕
*/
  sendDanmu: function () {
    // 获取弹幕内容
    let text = this.data.danmuTxt

    // 发送弹幕
    this.videoCtx.sendDanmu({
      text:text,
      color:getRandomColor()
    })
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    // 创建视频上下文
    this.videoCtx = wx.createVideoContext("myVideo")
      console.log(1)
      console.log( wx.getStorageSync('videoUrl'))
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