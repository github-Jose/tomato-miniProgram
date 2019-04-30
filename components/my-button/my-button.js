Component({
  properties: {
    innerText: {
      type: String,
      value: ''
    },
    mini: {
      type: Boolean,
      value: false
    },
    noBackground: {
      type: Boolean,
      value: false
    },
    noGradient: {
      type: Boolean,
      value: false
    }
  },
  methods: {
    handleClick () {
      this.triggerEvent('handleClick')
    }
  }
})