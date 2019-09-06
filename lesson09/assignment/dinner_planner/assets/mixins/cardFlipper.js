export default {
  data() {
    return {
      isFlipped:false
    }
  },
  // toggles '.isFlipped'
  methods: {
    cardFlipper() {
      this.isFlipped = !this.isFlipped;
    }
  }
}
