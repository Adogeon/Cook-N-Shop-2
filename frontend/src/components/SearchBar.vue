<template>
  <div class="mb-3 row justify-content-center">
    <div class="col-md-8 col-sm-12">
      <input
        type="text"
        class="form-control"
        id="search-input"
        placeholder="Enter search"
        v-model="filter"
        @input="$emit('update:filter', filter)"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchBar",
  emits: ["update:filter"]
};
</script>
