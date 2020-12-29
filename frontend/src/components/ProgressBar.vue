<template>
  <div :class='["progress-bar"]'>
    <div class="step" v-for="(step,index) in stepList" :key="step">
      <p>{{step}}</p>
      <div :class="['bullet',{active: doneList.includes(step)}]">
        <span>{{index+1}}</span>
      </div>
      <div :class="['check', {active: doneList.includes(step)}]" >x</div>
    </div>
  </div>
</template>

<script>
// easy-to-use progress bar
// add the array of step as props
// provide moving back and forth as function for outside
// also provide current tab to work with outside
import {ref, toRefs, computed, provide} from "vue";

export default {
  props: {
    stepList: Array,
    doneList: Array
  },
  setup(props) {
    const { stepList } = toRefs(props);
    const currentIndex = ref(0);
    const currentStep = computed(() => stepList.value[currentIndex.value])
    const doneList = computed(() => stepList.value.slice(0, currentIndex.value))

    const moveNext = () => {
      currentIndex.value++
    }

    const moveBack = () => {
      currentIndex.value--
    }

    provide(moveNext, "moveNext");
    provide(moveBack, "moveBack");
    provide(currentStep, "currentStep");
    return {
      doneList,
      currentStep
    }
  }
}
</script>

<style scoped>
  .progress-bar {
    display: flex;
    flex-flow: row;
    justify-content: space-evenly;
  }
</style>