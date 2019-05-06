//index.js
//获取应用实例
// const app = getApp()

Page({
  data: {
    hideMyToast: true,
    todoList:[
      {
        status: true,
        text: '我是todoLsit1'
      },
      {
        status: true,
        text: '我是todoLsit2'
      },
      {
        status: true,
        text: '我是todoLsit3'
      },
      {
        status: true,
        text: '我是todoLsit4'
      },
      {
        status: true,
        text: '我是todoLsit5'
      },
      {
        status: true,
        text: '我是todoLsit6'
      },
      {
        status: true,
        text: '我是todoLsit7'
      }
    ]
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
  test () {
    wx.navigateTo({
      url: '/pages/startTomato/startTomato',
    })
  }
})
