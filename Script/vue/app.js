//https://dev.to/chadriae/change-picture-on-hover-with-vue-25lb

export default {
    name: "App",
    computed: {
      pictureHover () {
        if (this.hover == true) {
            return this.internals
        } else {
            return this.computer
        }
      }
    },
    data () {
      return {
        computer: "computer.JPG",
        internals: "internals.JPG",
        hover: false
      }
    },
    template: `
        <img :src="pictureHover" @mouseover="hover = true" @mouseleave="hover = false" id="vueapp">
      `
  };
  