Component({
  properties: {
    innerText: {
      type: String,
      value: ''
    },
    isTime: {
      type: Boolean,
      value: false
    },
    stop: {
      type: Boolean,
      value: false,
      observer: function (e) {
        e ? this.stopTime() : this.startTime() 
      }
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
          this.tellFather()
          clearInterval(this.data.timer)
        }
      }, 1000)
    },
    tellFather () {
      this.triggerEvent('timeEnd')
    },
    stopTime () {
      clearInterval(this.data.timer)
    }
  },
  attached () {
    this.formatTime(this.data.time)
    this.startTime()
  }
})