<template>
  <div :id="pageName" class="page">
    <transition name="slide-left">
      <slot v-if="active" name="slideLeft"></slot>
    </transition>
    <transition name="fade">
      <slot v-if="active" name="fade"></slot>
    </transition>
    <transition name="slide-right">
      <slot v-if="active" name="slideRight"></slot>
    </transition>
  </div>
</template>

<script>
export default {
  name: "page",
  props: {
    pageName: {
      type: String,
      required: true
    },
    staggeredContent: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      active: false
    };
  },
  created() {
    this.$eventHub.$on("active-page", this.checkActive);
  },
  methods: {
    checkActive(data) {
      this.active = data === this.pageName;
    }
  }
};
</script>

<style lang="sass" scoped>
.page
  width: 100vw
  height: 100vh

.fade-leave-active, .slide-left-leave-active, .slide-right-leave-active
  transition: opacity 0.5s ease-out, transform 0.5s ease-out
  display: inline-block

.fade-enter-active, .slide-left-enter-active, .slide-right-enter-active
  transition: opacity 0.4s ease-out 0.3s, transform 0.4s ease-out 0.3s
  display: inline-block

.fade-enter, .fade-leave-to
  opacity: 0
.fade-enter-to, .fade-leave
  opacity: 1

.slide-left-enter, .slide-left-leave-to
  opacity: 0
  transform: translateX(100%)

.slide-left-enter-to, .slide-left-leave
  opacity: 1
  transform: translateX(0)

.slide-right-enter, .slide-right-leave-to
  opacity: 0
  transform: translateX(-100%)

.slide-right-enter-to, .slide-right-leave
  opacity: 1
  transform: translateX(0)
</style>
