<template>
  <Page pageName="impact">
    <template #fade>
      <div class="impacts-container">
        <div class="impacts-content">
          <div class="impact-box">
            <h3 class="impact-heading">Engage</h3>
            <p class="impact-info">Supplement your healthcare efforts with immerisve animations that will bring the wonders of medicine to the public eye.</p>
          </div>
          <div class="impact-box">
            <h3 class="impact-heading">Educate</h3>
            <p class="impact-info">Whether you are a physician, organization, community, or non-healthcare professional, work with our creative developers to create your interactive story-telling, gameplay, or walkthrough experiences.</p>
          </div>
          <div class="impact-box">
            <h3 class="impact-heading">Empower</h3>
            <p class="impact-info">Join the new model of healthcare, where we the people play a vital role in public health efforts.</p>
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

<style lang="sass" scoped></style>
