<template>
  <Page pageName="goals">
    <template #slideLeft>
      <div class="goals-container">
        <p class="goal">
          Through our immersive medical education platform, we aim to empower
          individuals to engage in treatment and prevention efforts, which will,
          in turn, better health outcomes for their communities as a whole.
        </p>
      </div>
    </template>
  </Page>
</template>

<script>
import Page from "@/components/Page";

export default {
  name: "goals",
  components: { Page }
};
</script>

<style lang="sass" scoped></style>
