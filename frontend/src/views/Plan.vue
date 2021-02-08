<template>
  <plan-calendar />
</template>

<script>
import PlanCalendarVue from "../components/PlanCalendar.vue";

export default {
  name: "plan",
  components: { "plan-calendar": PlanCalendarVue }
};
</script>
