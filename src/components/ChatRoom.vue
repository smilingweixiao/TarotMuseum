<template>
  <div class="chat-room">
    <div class="chat-header"></div>
    <div class="chat-body">
      <div class="chat-intro">
        <p>歡迎來到塔羅解牌聊天室！</p>
        <p>身為塔羅占卜師，請根據左邊的牌卡內容，試著解讀下方的提問吧！</p>
      </div>
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
    image: Illustration | undefined
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
      .catch(() => {
        // console.error('Error sending message:', error)
        aiAnswer.value =
          'Clone 我的 GitHub 專案，設定你的 OpenAI API Key，在本地啟動伺服器即可開始使用聊天室！ ( repo: https://github.com/smilingweixiao/TarotMuseum )'
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

.chat-intro {
  width: 50%;
  margin: 10px auto;
  padding: 10px 20px;
  border-radius: 10px;
  border-style: dashed;
  border-width: 2px;
  border-color: #f59e0b;
  text-align: center;
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
