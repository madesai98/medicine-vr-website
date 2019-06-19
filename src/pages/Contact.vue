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
        <div class="contact-right"></div>
      </div>
    </template>
  </Page>
</template>

<script>
import Page from "@/components/Page";

export default {
  name: "contact",
  components: { Page },
  data() {
    return {
      name: "",
      email: "",
      company: "",
      idea: ""
    };
  }
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
  flex: 2
  margin-right: 200px

.contact-right
  flex: 1
  height: 100%
</style>
