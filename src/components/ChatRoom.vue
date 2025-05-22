<template>
  <div class="chat-room">
    <div class="chat-header">
      <!-- <h1>Chat Room</h1> -->
    </div>
    <div class="chat-body">
      <div class="chat-question">
        <div class="question-text">{{ question }}</div>
      </div>
      <div class="chat-user-answer" v-if="userAnswer">
        <div class="user-answer-text">{{ userAnswer }}</div>
      </div>
      <div class="chat-ai-answer" v-if="aiAnswer">
        <div class="ai-answer-text">
          {{ aiAnswer }}
        </div>
      </div>
    </div>
    <div class="chat-footer">
      <InputText
        type="text"
        v-model="userInput"
        placeholder="Type a message..."
        @keydown.enter.exact.prevent="sendMessage"
      />
      <Button label="Send" icon="pi pi-send" @click="sendMessage" />
    </div>
  </div>
</template>

<script setup lang="ts">
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'
import { ref, defineProps } from 'vue'
import { sendToGPT } from '@/api/chatApi'
import type { Illustration } from '@/service/PhotoService'

const userInput = ref<string>('')
const userAnswer = ref<string>('')
const aiAnswer = ref<string>('')
const question = ref<string>('大四的最後一學期快要結束了，我想要知道我能不能順利畢業？')

const props = withDefaults(
  defineProps<{
    image: Illustration
  }>(),
  {
    image: () => ({
      itemImageSrc: '/images/major/rws_tarot_00_fool.jpg',
      thumbnailImageSrc: '/images/major/rws_tarot_00_fool.jpg',
      alt: '愚者穿著色彩斑斕的服裝...',
      title: 'The Fool',
      journey: 'The Fool',
    }),
  },
)

const sendMessage = () => {
  if (userInput.value.trim() !== '') {
    userAnswer.value = userInput.value
    userInput.value = ''
    aiAnswer.value = ''

    sendToGPT(question.value, props.image?.itemImageSrc)
      .then((response) => {
        aiAnswer.value = response
      })
      .catch((error) => {
        console.error('Error sending message:', error)
        aiAnswer.value = '抱歉，我無法處理您的請求。'
      })
  }
}
</script>

<style scoped>
.chat-room {
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
}
.chat-header {
  height: 60px;
}
.chat-body {
  display: flex;
  flex-direction: column;
  gap: 10px;
  flex: 1;
  padding: 20px;
  overflow-y: auto;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
}
.chat-footer {
  display: flex;
  flex-direction: row;
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
