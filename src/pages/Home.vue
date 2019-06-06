<template>
  <Page pageName="home">
    <template #fade>
      <span>Test</span>
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

<style lang="sass" scoped></style>
