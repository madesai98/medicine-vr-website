<template>
  <Page pageName="goals">
    <template #slideLeft>
      <div class="goals-container">
        <div class="goals-left"></div>
        <div class="goals-right">
          <p class="goal">
            Through our immersive medical education platform, we aim to empower
            individuals to engage in treatment and prevention efforts, which
            will, in turn, better health outcomes for their communities as a
            whole.
          </p>
        </div>
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

<style lang="sass" scoped>
.goals-container
  padding: 30px
  display: flex
  align-items: center
  width: 100%

.goals-left
  flex: 1
  height: 100%

.goals-right
  flex: 2

.goal
  text-align: center
  margin: 0 90px
  font-style: italic
</style>
