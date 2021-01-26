<template>
  <div :class="['progress-bar']">
    <div
      class="step"
      :class="{ done: doneList.includes(step), current: step === currentStep }"
      v-for="(step, index) in stepList"
      :key="`step-${index}`"
    >
      <p>{{ step }}</p>
    </div>
  </div>
</template>

<script>
// easy-to-use progress bar
// add the array of step as props
// provide moving back and forth as function for outside
// also provide current tab to work with outside

export default {
  props: {
    stepList: Array,
    doneList: Array,
    currentStep: String
  }
};
</script>

<style scoped>
.progress-bar {
  display: flex;
  flex-flow: row;
  justify-content: center;
}

.step {
  border-bottom: 2px gray solid;
  flex-basis: 0;
  flex-grow: 1;
}

.done {
  border-bottom-color: green;
  color: green;
}

.current {
  text-shadow: rgb(60, 255, 0) 1px 0 10px;
}

.bullet {
  position: relative;
}
</style>
