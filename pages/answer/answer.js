// pages/answer/answer.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    select:"",
    status:"",
    /*题库*/
    list:[
      {
        title:"非遗刺绣是指哪种传统手工艺？",
        option:["刺绣","编织","雕刻","陶艺"],
        answer:"A",
      },
      {
        title:"以下哪个国家的非逮刺绣最著名?",
        option:["日本","法国","中国","印度"],
        answer:"C",
      },
      {
        title:"刺绣的起源可以追溯到哪个历史时期？",
        option:["中世纪","古代","文艺复兴时期","工业革命时期"],
        answer:"B",
      },
      {
        title:"刺绣的材料通常包括以下哪些?",
        option:["织物和线","木头和石头","金属和玻璃","塑料和纸张"],
        answer:"A",
      },
      {
        title:"刺绣可以被应用在哪些物品上?",
        option:["衣物","家具","被褥","手袋"],
        answer:"A",
      },
      {
        title:"刺绣艺术的主要特点是什么?",
        option:["精致细腻","简约明快","大胆创新","机械化生产"],
        answer:"A",
      },
      {
        title:"刺绣在中国的哪个省份最为发达?",
        option:["广东","湖南","四川","江苏"],
        answer:"C",
      },
      {
        title:"以下哪个朝代对中国刺绣艺术的发展影响最大?",
        option:["唐朝","宋朝","元朝","明朝"],
        answer:"B",
      }

    ],
    answerNow:0,
    optionList:["A","B","C","D"],
    successNum:0,
    failNum:0,
  },

  /*选中的选项*/
  selectAnswer(e){
    console.log(e);
    const { item } = e.currentTarget.dataset;

    const answer= this.data.list[this.data.answerNow].answer;

    /*判断答案是否正确*/
    if(item === answer){
      // 正确
        this.setData({
          select: item,
          status:"success",
          successNum:this.data.successNum + 1,
        })
      } else{
      // 错误
        this.setData({
        select: item,
        status:"fail",
        failNum:this.data.failNum + 1,
        })
      }

      /** 当答完最后一道题时调回主页面*/
      if(this.data.answerNow === this.data.list.length - 1){
        wx.showModal({
          title:"恭喜你",
          content:`你已完成所有题目，共答对${this.data.successNum}道题共答错${this.data.failNum}道题，请再接再厉!`,
          showCancel: false,
          success:() => {
            wx.switchTab({
              url: '../popos/popos',
            })
          }
        })
      }else{/**回调函数 */
          setTimeout(()=>{
            this.setData({
              answerNow: this.data.answerNow + 1,
                    select:"",
                    status:"",
            })
          },500);/*延迟500ms触发函数*/
        }
        

  },









  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

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
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})