import "@babel/polyfill";
import "mutationobserver-shim";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import urql from "@urql/vue"

const app = createApp(App);

app.use(router);

app.use(urql, {
  url: "/api/playground",
  /**
   * fetchOptions: () => {
   *  const token = getToken();
   *  return {
   *    headers: { authorization: token ? `Bearer ${token}` : ''}
   *  }
   * }
   */
});

app.mount("#app");

