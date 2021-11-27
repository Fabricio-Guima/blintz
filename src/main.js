import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Loading from "@/components/Loading";

Vue.config.productionTip = false;
Vue.component("Loading", Loading);

//filtro
Vue.filter("priceBRL", (valor) => {
  valor = Number(valor);
  if (!isNaN(valor)) {
    return valor.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL"
    });
  } else {
    return "";
  }
});

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount("#app");
