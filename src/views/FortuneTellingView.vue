<template>
  <div class="nav-bar">
    <NavBar
      :scrollToTop="scrollToTop"
      :scrollToGallery="scrollToGallery"
      :scrollToMajorPanel="scrollToMajorPanel"
      :scrollToMinorPanel="scrollToMinorPanel"
      :scrollToIntro="scrollToIntro"
    ></NavBar>
  </div>
  <div class="chatroom-section">
    <div class="chatroom-illustration">
      <img
        :src="image?.itemImageSrc"
        :alt="image?.alt"
        class="chatroom-image"
        :style="randomFlip ? 'transform: rotate(-180deg);' : ''"
      />
    </div>
    <div class="chatroom-box">
      <Chatroom :image="image"></Chatroom>
    </div>
  </div>
  <BottomFooter></BottomFooter>
</template>

<script setup lang="ts">
import NavBar from '@/components/NavBar.vue'
import BottomFooter from '@/components/BottomFooter.vue'
import Chatroom from '@/components/ChatRoom.vue'

import { useRouter } from 'vue-router'
import { PhotoService } from '@/service/PhotoService'
import { ref, onBeforeMount } from 'vue'
import type { Illustration } from '@/service/PhotoService'

const router = useRouter()
const image = ref<Illustration>()
const randomFlip = ref<boolean>(Math.random() < 0.5)

onBeforeMount(() => {
  PhotoService.randomGetImages().then((data) => {
    image.value = data
  })
  randomFlip.value = Math.random() < 0.5
})

const scrollToTop = () => {
  router.push({ path: '/' })
  document.body.scrollTo({ top: 0, behavior: 'smooth' })
  document.documentElement.scrollTo({ top: 0, behavior: 'smooth' })
}
const scrollToIntro = () => {
  router.push({ path: '/' })
  document.body.scrollTo({ top: 0, behavior: 'smooth' })
  document.documentElement.scrollTo({ top: 0, behavior: 'smooth' })
}
const scrollToGallery = () => {
  router.push({ path: '/' })
  document.body.scrollTo({ top: 0, behavior: 'smooth' })
  document.documentElement.scrollTo({ top: 0, behavior: 'smooth' })
}
const scrollToMajorPanel = () => {
  router.push({ path: '/' })
  document.body.scrollTo({ top: 0, behavior: 'smooth' })
  document.documentElement.scrollTo({ top: 0, behavior: 'smooth' })
}
const scrollToMinorPanel = () => {
  router.push({ path: '/' })
  document.body.scrollTo({ top: 0, behavior: 'smooth' })
  document.documentElement.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<style scoped>
.chatroom-section {
  height: 100vh;
  width: 100vw;
  background-color: #f0f0f0;
  display: flex;
  flex-direction: row;
  align-items: center;
}
.chatroom-illustration {
  width: 30%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.chatroom-box {
  width: 70%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  padding: 20px;
}

.chatroom-image {
  height: 70%;
  max-width: 90%;
  object-fit: contain;
}
</style>
