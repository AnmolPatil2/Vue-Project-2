<template>
  <div class="Chat container">
    <h2>yo {{name}}</h2>
  </div>
</template>

<script>
export default {
  name: "Chat",
  props: ["name"],
  data() {
    return {};
  },
  methods: {}
};
</script>
<style scoped>
</style>
