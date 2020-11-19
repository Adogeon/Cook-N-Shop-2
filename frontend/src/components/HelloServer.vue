<template>
  <section id="class-server">
    <p> - Hello Server</p>
    <p>{{greeting}}</p>
  </section>
</template>

<script>
export default {
  name: "HelloServer",
  data: () => {
    return {
      greeting: "Hello world"
    }
  }
}
</script>