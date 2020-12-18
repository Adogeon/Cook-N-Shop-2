<template>
  <section>
    <h3> Recipe Instructions </h3>
    <input type="text" v-model="state.instruction" />
    <button @click="addInstruction"> Add Instruction </button>
    <ul>
      <li v-for="(instruction, i) in state.instructionList" :key="i">
        {{instruction}}
        <button @click="removeInstruction(i)">x</button>
      </li>
    </ul>
    <button @click="onSubmit"> Next </button>
  </section>
  
</template>
<script>
  import { reactive, inject } from "vue";
  export default {
    setup() {
      const { state, addInstruction, removeInstruction, onSubmit} = useInstruction();

      return {
        state,
        addInstruction,
        removeInstruction,
        onSubmit
      }
    }
  };

  function useInstruction() {
    let state = reactive({
      instruction: "",
      instructionList: []
    });

    const addInstruction = () => {
      state.instructionList.push(state.instruction);
      state.instruction = "";
    }

    const removeInstruction = (i) => {
      state.instructionList.splice(i);
    }

    const setInstructions = inject("setInstructions");
    const onSubmit = () => {
      setInstructions(state.instructionList)
    }

    return { state, addInstruction, removeInstruction, onSubmit }
  }
</script>