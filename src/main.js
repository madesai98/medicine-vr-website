import Vue from "vue";
import App from "./App.vue";

import { MdField } from "vue-material/dist/components";
import "vue-material/dist/vue-material.min.css";
import "vue-material/dist/theme/default.css";

Vue.config.productionTip = false;

Vue.prototype.$eventHub = new Vue();

Vue.use(MdField);

new Vue({
  render: h => h(App)
}).$mount("#app");
