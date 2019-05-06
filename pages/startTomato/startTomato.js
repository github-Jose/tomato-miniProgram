// pages/startTomato/startTomato.js
Page({
  data: {
    oneAgain: false,
    stopToamto: false
  },
  timeEnd () {
    this.setData({ oneAgain: true })
  },
  isStop () {
    this.data.stopToamto ? this.setData({ stopToamto: false }) : this.setData({ stopToamto: true })
  },
  goAgain () {
    this.setData({ oneAgain: false })
  }
})