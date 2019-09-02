export default {
  data() {
    return {
      borderOn:false
    }
  },
  methods: {
    toggleBorderOn() {
      this.borderOn = !this.borderOn;
    }
  }
}
