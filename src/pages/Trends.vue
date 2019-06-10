<template>
  <Page pageName="trends">
    <template #slideRight>
      <div class="trends-container">
        <h2 class="trends-header">Current Trends in Medicine</h2>
        <div class="trends-content">
          <div class="trend-box" style="animation-delay: 0.8s; left: 30px;">
            <h3 class="trend-heading">Poor Treatment Outcomes</h3>
            <p class="trend-info">
              Due to patient misinformation, negative attitudes, and lacking
              motivation.
            </p>
          </div>
          <div class="trend-box" style="animation-delay: 1.1s; left: 60px;">
            <h3 class="trend-heading">High Disease & Condition Prevelance</h3>
            <p class="trend-info">
              Preventable HIV, cardiovascular, and substance abuse cases
              continue to burden communities.
            </p>
          </div>
          <div class="trend-box" style="animation-delay: 1.4s; left: 90px;">
            <h3 class="trend-heading">Increased Healthcare Expenditures</h3>
            <p class="trend-info">
              The U.S. annual spending on healthcare is expected to reach $6.6
              trillion by 2027.
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
  name: "trends",
  components: { Page },
  data() {
    return {
      content: [
        {
          header: "Poor Treatment Outcomes",
          info:
            "Due to patient misinformation, negative attitudes, and lacking motivation."
        },
        {
          header: "High Disease & Condition Prevelance",
          info:
            "Preventable HIV, cardiovascular, and substance abuse cases continue to burden communities."
        },
        {
          header: "Increased Healthcare Expenditures",
          info:
            "The U.S. annual spending on healthcare is expected to reach $6.6 trillion by 2027."
        }
      ]
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

.trends-content
  position: relative

.trend-box
  position: relative
  opacity: 0
  animation: stagger 0.4s normal forwards ease-out
</style>
