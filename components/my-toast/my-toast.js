Component({
  properties: {
    justConfirm: {
      type: Boolean,
      value: false
    },
    placeholder: {
      type: String,
      value: ''
    }
  },
  data: {
    reason: ''
  },
  methods: {
    cancel () {
      this.triggerEvent('cancel')
    },
    confirm () {
      this.triggerEvent('confirm', this.data.reason)
    },
    changeValue (e) {
      this.setData({ reason: e.detail.value })
    }
  }
})