<template>
  <input type="text" :value="name" @input="$emit('update:name', $event.target.value)">
  <input type="text" :value="description" @input="$emit('update:description', $event.target.value)">
</template>

<script>
export default {
  props:[
    name,
    description
  ],
  emits: ['update:name', 'update:description'],
}
</script>