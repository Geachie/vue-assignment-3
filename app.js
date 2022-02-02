const app = Vue.createApp({
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    addNumber(num) {
      this.counter = this.counter + num;
    },
  },
  computed: {
    result() {
      return this.counter < 37
        ? "Not there yet!"
        : this.counter === 37
        ? this.counter
        : "Too much!";
    },
  },
  watch: {
    result() {
      const that = this;
      setTimeout(function () {
        that.counter = 0;
      }, 5000);
    },
  },
});

app.mount("#assignment");
