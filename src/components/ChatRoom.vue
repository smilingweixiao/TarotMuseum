<template>
  <div class="chat-room">
    <div class="chat-header">
      <!-- <h1>Chat Room</h1> -->
    </div>
    <div class="chat-body">
      <div class="chat-question">
        <div class="question-text">我想要來諮詢感情的問題...</div>
      </div>
      <div class="chat-user-answer">
        <div class="user-answer-text">哈囉</div>
      </div>
      <div class="chat-ai-answer">
        <div class="ai-answer-text">
          你好！有什麼我可以幫助你的嗎？你好！有什麼我可以幫助你的嗎？你好！有什麼我可以幫助你的嗎？你好！有什麼我可以幫助你的嗎？你好！有什麼我可以幫助你的嗎？你好！有什麼我可以幫助你的嗎？你好！有什麼我可以幫助你的嗎？你好！有什麼我可以幫助你的嗎？
        </div>
      </div>
    </div>
    <div class="chat-footer">
      <InputText type="text" v-model="userInput" placeholder="Type a message..." />
      <Button label="Send" icon="pi pi-send" />
    </div>
  </div>
</template>

<script setup lang="ts">
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'

import { ref } from 'vue'

const userInput = ref('')
</script>

<style scoped>
.chat-room {
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  background-color: #f0f0f0;
}
.chat-header {
  color: white;
  padding: 24px;
  text-align: center;
}
.chat-body {
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 20px;
  overflow-y: auto;
}
.chat-footer {
  display: flex;
  padding: 10px;

  gap: 10px;
}
.chat-footer input {
  flex: 1;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.chat-question {
  width: fit-content;
  max-width: 60%;
  background-color: #e0e0e0;
  padding: 10px 15px;
  border-radius: 20px;
  margin-bottom: 10px;
}

.chat-user-answer {
  margin-left: auto;
  width: fit-content;
  max-width: 60%;
  background-color: #d9f99d;
  padding: 10px 15px;
  border-radius: 20px;
  margin-bottom: 10px;
}
.chat-ai-answer {
  margin-left: auto;
  width: fit-content;
  max-width: 60%;
  background-color: #fde68a;
  /* background-color: #f0d0c0; */
  padding: 10px 15px;
  border-radius: 20px;
  margin-bottom: 10px;
}
</style>
