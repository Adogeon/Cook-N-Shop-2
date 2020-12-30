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
    <button @click="onNavigate('back')"> Back </button>
    <button @click="onNavigate('next')"> Next </button>
  </section>
  
</template>
<script>
  import { reactive, inject } from "vue";
  export default {
    setup() {
      const { state, addInstruction, removeInstruction, onNavigate} = useInstruction();

      return {
        state,
        addInstruction,
        removeInstruction,
        onNavigate
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

    const changeRecipe = inject("changeRecipe");
    //const navigateTab = inject("navigateTab");
    const moveNext = inject('moveNext');
    const moveBack = inject('moveBack')
    const onNavigate = (direction) => {
      changeRecipe("instructions", state.instructionList);
      //navigateTab("Review");
      if(direction === "next") {
        moveNext()
      } else if(direction === "back") {
        moveBack()
      }
    }
   
    return { state, addInstruction, removeInstruction, onNavigate }
  }
</script>

<style scoped>
input {
  width: 100%;
  margin: 0.25px 0;
  padding: 5px 10px;
  border: 0;
  border-bottom: 1px solid black;
  text-align: center;
}

input:focus {
  outline: none;
}
</style>