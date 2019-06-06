<template>
  <div :id="pageName" class="page">
    <transition name="fade">
        <slot v-if="active"></slot>
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

.fade-leave-active
  transition: opacity .5s

.fade-leave-to
  opacity: 0
</style>
