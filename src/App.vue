<template>
  <div
    id="app"
    v-bind:style="{
      top: -(pageIndex * 100) + 'vh',
      transition: scrollAnimationTime / 1000 + 's top ' + scrollAnimationType
    }"
    ref="app"
  >
    <Home />
    <Trends />
    <Goals />
    <Impact />
    <Contact />
  </div>
</template>

<script>
import Home from "@/pages/Home";
import Trends from "@/pages/Trends";
import Goals from "@/pages/Goals";
import Impact from "@/pages/Impact";
import Contact from "@/pages/Contact";

export default {
  name: "app",
  components: {
    Home,
    Trends,
    Goals,
    Impact,
    Contact
  },
  data() {
    return {
      scrollAvailable: true,
      scrollAnimationType: "ease-in-out",
      scrollAnimationTime: 300,
      pageIndex: 0
    };
  },
  methods: {
    handleScroll(e) {
      if (this.scrollAvailable) {
        this.scrollAvailable = false;

        if (e.deltaY < 0) this.pageUp();

        if (e.deltaY > 0) this.pageDown();

        setTimeout(
          function() {
            this.scrollAvailable = true;
          }.bind(this),
          this.scrollAnimationTime
        );
      }
    },
    handleHistoryChange() {
      this.setPage(document.location.pathname);
    },
    setPage(path) {
      path = path.replace("/", "");

      if (path === "") path = "home";

      this.pageIndex = Array.from(this.$refs.app.children).findIndex(
        ch => ch.id === path
      );

      if (this.pageIndex < 0)
        document.location.href = "/";

      this.$eventHub.$emit(
        "active-page",
        this.$refs.app.children[this.pageIndex].id
      );
    },
    pageUp() {
      if (this.pageIndex > 0) this.pageIndex--;

      if (history.pushState) {
        window.history.pushState(
          "",
          "",
          "/" + this.$refs.app.children[this.pageIndex].id
        );
      }

      this.$eventHub.$emit(
        "active-page",
        this.$refs.app.children[this.pageIndex].id
      );
    },
    pageDown() {
      if (this.pageIndex < this.$refs.app.children.length - 1) this.pageIndex++;

      if (history.pushState) {
        window.history.pushState(
          "",
          "",
          "/" + this.$refs.app.children[this.pageIndex].id
        );
      }

      this.$eventHub.$emit(
        "active-page",
        this.$refs.app.children[this.pageIndex].id
      );
    }
  },
  mounted() {
    this.setPage(document.location.pathname);
  },
  created() {
    window.addEventListener("wheel", this.handleScroll);
    window.onpopstate = this.handleHistoryChange;
  },
  destroyed() {
    window.removeEventListener("wheel", this.handleScroll);
  }
};
</script>

<style lang="sass">
$color_background: #000
$color_text_main: #fff
$color_accent_blue: blue
$color_accent_purple: purple
$color_accent_pink: pink

html, body
  width: 100vw
  height: 100vh
  margin: 0
  padding: 0
  position: relative
  overflow: hidden
  background: $color_background
  color: $color_text_main

#app
  position: relative
  transition: 0.5s top ease-in
  width: 100vw

</style>
