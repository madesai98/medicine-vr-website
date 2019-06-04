<template>
  <div id="app" v-bind:style="{ top: -(pageIndex * 100) + 'vh', transition: (scrollAnimationTime / 1000) + 's top ' + scrollAnimationType }" ref="app">
    <div id="home" class="page">a</div>
    <div id="mission" class="page">b</div>
    <div id="about" class="page">c</div>
    <div id="contact" class="page">d</div>
  </div>
</template>

<script>

export default {
  name: "app",
  components: {
  },
  data() {
    return {
      scrollAvailable: true,
      scrollAnimationType: "ease-in-out",
      scrollAnimationTime: 300,
      pageIndex: 0
    }
  },
  methods: {
    handleScroll(e) {
      if (this.scrollAvailable) {
        this.scrollAvailable = false;

        if (e.deltaY < 0)
          this.pageUp();

        if (e.deltaY > 0)
          this.pageDown();

        setTimeout(function() {
            this.scrollAvailable = true;
        }.bind(this), this.scrollAnimationTime);
      }
    },
    handleHistoryChange() {
      this.setPage(document.location.pathname);
    },
    setPage(path) {
      path = path.replace('/', '');

      if (path === '')
        path = 'home'

      this.pageIndex = Array.from(this.$refs.app.children).findIndex(ch => ch.id === path);
    },
    pageUp() {
      if (this.pageIndex > 0)
        this.pageIndex--;

      if (history.pushState) {
        window.history.pushState("", "", "/" + this.$refs.app.children[this.pageIndex].id);
      }
    },
    pageDown() {
      if (this.pageIndex < this.$refs.app.children.length - 1)
        this.pageIndex++;
      
      if (history.pushState) {
        window.history.pushState("", "", "/" + this.$refs.app.children[this.pageIndex].id);
      }
    }
  },
  mounted() {
    this.setPage(document.location.pathname);
  },
  created () {
    window.addEventListener('wheel', this.handleScroll);
    window.onpopstate = this.handleHistoryChange;
  },
  destroyed () {
    window.removeEventListener('wheel', this.handleScroll);
  }
};
</script>

<style lang="sass">
html, body
  width: 100vh
  height: 100vh
  margin: 0
  padding: 0
  position: relative
  overflow: hidden

#app
  position: relative
  transition: 0.5s top ease-in

.page
  height: 100vh
</style>
