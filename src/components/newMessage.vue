<template>
  <div class="new-message">
    <form @submit.prevent="addmessage">
      <label for="new-message">Enter your message</label>
      <input type="text" name="new-message" v-model="newmessage">
    </form>
  </div>
</template>

<script>
import db from "../firebase";
export default {
  name: "Chat",
  props: ["name"],
  data() {
    return { newmessage: null };
  },
  methods: {
    addmessage() {
      if (this.newmessage) {
        console.log(this.newmessage);
        db.collection("messages")
          .add({
            content: this.newmessage,
            name: this.name,
            timestamp: Date.now()
          })
          .catch(err => {
            console.log(err);
          });
        this.newmessage = null;
      }
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
