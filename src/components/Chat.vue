<template>
  <div class="Chat container">
    <h2 class="center teal-text">Chat-here</h2>
    <div class="card">
      <div class="card-content">
        <ul class="messages">
          <li>
            <span class="teal-text">Name</span>
            <span class="grey-text text-darken-3">messages</span>
            <span class="gray-text time">time</span>
          </li>
        </ul>
        <div class="card-action">
          <newMessage :name="name"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import newMessage from "@/components/newMessage.vue";
export default {
  name: "Chat",
  props: ["name"],
  components: {
    newMessage
  },
  data() {
    return {};
  },
  methods: {}
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
