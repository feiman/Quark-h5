import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import * as mUtils from "./common/js/mUtils";
import config from "./config";

import Element from "element-ui";
import "@/common/styles/element-variables.scss";
import "@/common/styles/index.scss"; // 自定义 css
import "animate.css";

Vue.use(Element);

Vue.prototype.$utils = mUtils;
Vue.prototype.$config = config;

Vue.config.productionTip = false;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
