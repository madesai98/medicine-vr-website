<template>
  <Page pageName="home">
    <template #fade>
      <div class="logo-container">
        <h1>Test</h1>
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
</style>
