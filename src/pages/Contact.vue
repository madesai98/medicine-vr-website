<template>
  <Page pageName="contact">
    <template #slideRight>
      <div class="contact-container">
        <div class="contact-left">
          <h2 class="contact-header">Partner with MedicineVR</h2>
          <div class="contact-content">
            <md-field style="animation-delay: 0.8s; left: 30px;">
              <label>Name</label>
              <md-input v-model="name"></md-input>
            </md-field>
            <md-field style="animation-delay: 1.1s; left: 60px;">
              <label>Email</label>
              <md-input v-model="email" type="email"></md-input>
            </md-field>
            <md-field style="animation-delay: 1.4s; left: 90px;">
              <label>Company</label>
              <md-input v-model="company"></md-input>
            </md-field>
            <md-field style="animation-delay: 1.7s; left: 120px;">
              <label>Your Idea</label>
              <md-textarea v-model="idea" md-autogrow></md-textarea>
            </md-field>
          </div>
        </div>
        <div class="contact-right">
          <model-obj 
            src="/models/cholesterol.obj"
            mtl="/models/cholesterol.mtl"
            :backgroundAlpha="0"
            :rotation="rotation"
            @on-load="onLoad"
            :key="refresher"
            :controllable="false"
            :scale="{ x: 0.5, y: 0.5, z: 0.5 }"
            :position="{ x: 0, y: 0.03, z: 0 }"
            :lights="lights"
          ></model-obj>
        </div>
      </div>
    </template>
  </Page>
</template>

<script>
import Page from "@/components/Page";
import { ModelObj } from 'vue-3d-model'

export default {
  name: "contact",
  components: { Page, ModelObj },
  data() {
    return {
      name: "",
      email: "",
      company: "",
      idea: "",
      refresher: 0,
      rotation: {
        x: 0,
        y: 0,
        z: 0
      },
      lights: [
          {
            type: 'HemisphereLight',
            position: { x: 0, y: 0, z: -1 },
            skyColor: 0xffffff,
            groundColor: 0xffffff,
            intensity: 0.5,
          },
          {
            type: 'DirectionalLight',
            position: { x: 1, y: 1, z: 1 },
            color: 0xffffff,
            intensity: 0.8,
          },
      ],
      resizeTimer: null,
    };
  },
  methods: {
      onLoad () {
          this.rotate();
      },
      rotate () {
          this.rotation.y += 0.01;
          requestAnimationFrame(this.rotate);
      },
      windowResize () {
        console.log('test')
        clearTimeout(this.resizeTimer);
        this.resizeTimer = setTimeout(function() {
          console.log('done')
          this.refresher += 1;
        }, 250);
      }
  },
  mounted () {
    window.addEventListener('resize', this.windowResize);
  },
};
</script>

<style lang="sass" scoped>
@keyframes stagger
    from
        opacity: 0
        transform: translateX(-50px)
    to
        opacity: 1
        transform: translateX(0)

.md-field
  position: relative
  opacity: 0
  animation: stagger 0.4s normal forwards ease-out

.contact-container
  padding: 30px
  display: flex
  align-items: center
  width: 100%

.md-field .md-input, .md-field textarea
  color: #fff !important
  -webkit-text-fill-color: #fff !important
  font-family: 'Exo 2', sans-serif

.md-field:after
  background-color: #fff !important

.md-field label
  color: #598df4 !important
  font-family: 'Exo 2', sans-serif

.contact-left
  flex: 1
  margin-right: 200px

.contact-right
  flex: 2
  height: 100%
</style>
