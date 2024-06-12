
/**
* 自定义函数-跳转新闻浏览页面
*/
function goToDetail(id) {
  wx.navigateTo({
    url: '../detail/detail?id='+id,
  })
}



/*
 * 对外暴露接口
 */
module.exports = {
  goToDetail: goToDetail
}

//module.export.getNewsDetail = getNewsDetail