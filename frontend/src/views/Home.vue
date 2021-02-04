<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <plan-calendar />
  </div>
</template>

<script>
// @ is an alias to /src
import PlanCalendar from "../components/PlanView.vue";
import { inject } from "vue";
export default {
  name: "Home",
  components: { "plan-calendar": PlanCalendar },
  setup() {
    const { isSignIn } = inject("auth");

    return { isSignIn };
  }
};
</script>
