<template>
  <div class="new-message">
    <form @submit.prevent="addmessage">
      <label for="new-message">Enter your message</label>
      <input type="text" name="new-message" v-model="newmessage">
    </form>
  </div>
</template>

<script>
export default {
  name: "Chat",
  props: ["name"],
  data() {
    return { newmessage: null };
  },
  methods: {
    addmessage() {
      console.log(this.newmessage, this.name, Date.now());
    }
  }
};
</script>
<style scoped>
.Chat h2 {
  font-size: 2.6em;
  margin-bottom: 40px;
}
.Chat span {
  font-size: 1.4em;
}
.Chat .time {
  display: block;
  font-size: 1.4em;
}
.messages {
  text-align: left;
}
</style>
