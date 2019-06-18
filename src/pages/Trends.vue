<template>
  <Page pageName="trends">
    <template #slideRight>
      <div class="trends-container">
        <div class="trends-left">
          <h2 class="trends-header">Current Trends in Medicine</h2>
          <div class="trends-content">
            <div class="trend-box" style="animation-delay: 0.8s; left: 30px;">
              <h3 class="trend-heading blue">Poor Treatment Outcomes</h3>
              <p class="trend-info">
                Due to patient misinformation, negative attitudes, and lacking
                motivation.
              </p>
            </div>
            <div class="trend-box" style="animation-delay: 1.1s; left: 60px;">
              <h3 class="trend-heading purple">High Disease & Condition Prevelance</h3>
              <p class="trend-info">
                Preventable HIV, cardiovascular, and substance abuse cases
                continue to burden communities.
              </p>
            </div>
            <div class="trend-box" style="animation-delay: 1.4s; left: 90px;">
              <h3 class="trend-heading pink">Increased Healthcare Expenditures</h3>
              <p class="trend-info">
                The U.S. annual spending on healthcare is expected to reach $6.6
                trillion by 2027.
              </p>
            </div>
          </div>
        </div>
        <div class="trends-right">

        </div>
      </div>
    </template>
  </Page>
</template>

<script>
import Page from "@/components/Page";

export default {
  name: "trends",
  components: { Page }
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

.trends-container
  padding: 30px
  display: flex
  align-items: center
  width: 100%

.trends-left
  margin-right: 90px
  flex: 2

.trends-right
  flex: 1
  height: 100%

</style>
