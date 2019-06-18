<template>
  <Page pageName="home">
    <template #fade>
      <div>
        <div class="logo">
          <img src="../assets/logo.png" alt="logo-icon" class="logo-icon" />
          <img src="../assets/logo-text.png" alt="" class="logo-text" />
          <span class="sub-header">PUBLIC HEALTH MEETS INTERACTIVE MEDICINE</span>
        </div>
        <a class="learn-more" v-on:click="$emit('page-down')">Learn More</a>
      </div>
    </template>
  </Page>
</template>

<script>
import Page from "@/components/Page";

export default {
  name: "home",
  components: { Page }
};
</script>

<style lang="sass" scoped>
#home
  display: flex
  align-items: center
  justify-content: center
  position: relative

.learn-more
  position: absolute
  bottom: 45px
  display: block
  color: #fff
  font-size: 1.5rem
  text-decoration: none
  opacity: 0
  animation: logo-fade 0.5s ease-in-out 2.1s forwards
  transform: translateX(-50%)
  left: 50%
  cursor: pointer

  &:after
    content: ''
    display: block
    border-right: 4px solid #fff
    border-bottom: 4px solid #fff
    width: 20px
    height: 20px
    transform: rotate(45deg)
    margin: 7px auto
    border-radius: 2px

.sub-header
  opacity: 0
  position: absolute
  bottom: -25px
  font-size: 2.334em
  left: 0
  color: #6d737b
  font-style: italic
  animation: logo-fade 1s cubic-bezier(0.4,-0.2, 0.4, 1.2) 2.5s forwards

.logo
  height: 300px
  width: 260.11px
  animation: logo-slide 1s cubic-bezier(0.4,-0.2, 0.4, 1.2) 1.6s forwards
  display: flex
  align-items: center
  position: relative

  .logo-icon
    height: 100%
    animation: logo-spin 0.9s cubic-bezier(0.4,-0.2, 0.4, 1.2) 0.5s forwards

  .logo-text
    height: 70px
    opacity: 0
    animation: logo-fade 0.5s ease-in-out 2.1s forwards
    position: absolute
    left: 116.7px
    margin-top: -8px

@keyframes logo-spin
  0%
    transform: rotate(-360deg)

  100%
    transform: rotate(0deg)

@keyframes logo-fade
  0%
    opacity: 0

  100%
    opacity: 1

@keyframes logo-slide
  0%
    width: 260.11px
    height: 300px

  100%
    height: 100px
    width: 790px
</style>
