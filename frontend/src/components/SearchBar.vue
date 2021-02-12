<template>
  <form>
    <div class="mb-3 row justify-content-center">
      <label
        for="search-input"
        class="form-label col-sm-2 col-md-1 col-form-label justify-text-end"
        >Search</label
      >
      <div class="col-md-8 col-sm-6">
        <input type="text" class="form-control" id="search-input" />
      </div>
    </div>
  </form>
</template>

<script>
export default {
  name: "SearchBar"
};
</script>
