//index.js
//获取应用实例
// const app = getApp()

Page({
  data: {
    hideMyToast: true
  },
  //事件处理函数
  handleClick () {
    this.setData({ hideMyToast: false })
  },
  confirm (e) {
    console.log(e)
    this.setData({ hideMyToast: true })
  },
  cancel () {
    this.setData({ hideMyToast: true })
  },
})
