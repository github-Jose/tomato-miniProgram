Component({
  properties: {
    innerText: {
      type: String,
      value: ''
    },
    isTime: {
      type: Boolean,
      value: false
    }
  },
  data: {
    time: 5,
    dealTime: '',
    timer: null
  },
  methods: {
    formatTime (time) {
      if (time < 0) return
      let dealTime
      let m = Math.floor(time / 60)
      let s = Math.floor(time % 60)
      if (m < 10) {
        m = `0${m}`
      }
      if (s < 10) {
        s = `0${s}`
      }
      dealTime = `${m}:${s}`
      this.setData({ dealTime: dealTime })
    },
    startTime () {
      this.data.timer = setInterval(() => {
        this.setData({ time: this.data.time - 1 })
        this.formatTime(this.data.time)
        if (this.data.time <= 0) {
          clearInterval(this.data.timer)
        }
      }, 1000)
    }
  },
  attached () {
    this.formatTime(this.data.time)
    this.startTime()
  }
})