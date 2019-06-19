<template>
  <Page pageName="impact">
    <template #fade>
      <div class="impacts-container">
        <div class="impacts-content">
          <div class="impact-box">
            <h3 class="impact-heading blue">Engage</h3>
            <p class="impact-info">
              Supplement your healthcare efforts with immerisve animations that
              will bring the wonders of medicine to the public eye.
            </p>
          </div>
          <div class="impact-box">
            <h3 class="impact-heading purple">Educate</h3>
            <p class="impact-info">
              Whether you are a physician, organization, community, or
              non-healthcare professional, work with our creative developers to
              create your interactive story-telling, gameplay, or walkthrough
              experiences.
            </p>
          </div>
          <div class="impact-box">
            <h3 class="impact-heading pink">Empower</h3>
            <p class="impact-info">
              Join the new model of healthcare, where we the people play a vital
              role in public health efforts.
            </p>
          </div>
        </div>
      </div>
    </template>
  </Page>
</template>

<script>
import Page from "@/components/Page";

export default {
  name: "impact",
  components: { Page }
};
</script>

<style lang="sass" scoped>
.impacts-container
  padding: 30px
  display: flex
  align-items: center
  width: 100%

.impacts-content
  display: flex
  justify-content: center
  width: 100%

.impact-box
  flex: 1
  margin: 0 30px
  text-align: center
  max-width: 315px
</style>
