<template>
  <div class="Chat container">
    <h2 class="center teal-text">Chat-here</h2>
    <div class="card">
      <div class="card-content">
        <ul class="messages" v-chat-scroll>
          <li v-for="message in messages" :key="message.id">
            <span class="teal-text">{{message.name}}:</span>
            <span class="grey-text text-darken-3">{{message.content}}</span>
            <span class="gray-text time">{{message.timestamp}}</span>
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
import db from "../firebase";
import moment from "moment";
export default {
  name: "Chat",
  props: ["name"],
  components: {
    newMessage
  },
  data() {
    return { messages: [] };
  },
  methods: {},
  created() {
    let ref = db.collection("messages").orderBy("timestamp");
    ref.onSnapshot(snapshot => {
      snapshot.docChanges().forEach(change => {
        if (change.type == "added") {
          let doc = change.doc;
          this.messages.push({
            id: doc.id,
            content: doc.data().content,
            name: doc.data().name,
            timestamp: moment(doc.data().timestamp).format("LT")
          });
        }
      });
    });
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
  font-size: 1em;
}
.messages {
  text-align: left;
  max-height: 400px;
  overflow: auto;
}
</style>
