<template>
  <plan-calendar/>
</template>

<script>
import PlanCalendar from "../components/PlanView.vue"

export default {
  name:"prop",
  components: {"plan-calendar": PlanCalendar}
}
</script>