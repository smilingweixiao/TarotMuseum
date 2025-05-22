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
      <img :src="image?.itemImageSrc" :alt="image?.alt" class="chatroom-image" />
    </div>
    <div class="chatroom-box">
      <Chatroom></Chatroom>
    </div>
  </div>
  <BottomFooter></BottomFooter>
</template>

<script setup lang="ts">
import NavBar from '@/components/NavBar.vue'
import BottomFooter from '@/components/BottomFooter.vue'
import Chatroom from '@/components/Chatroom.vue'
import { useRouter } from 'vue-router'
import { PhotoService } from '@/service/PhotoService'
import { onMounted, ref } from 'vue'

const router = useRouter()

const image = ref(null)

onMounted(() => {
  PhotoService.randomGetImages().then((data) => {
    image.value = data
  })
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
  /* gap: 20px; */
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
  /* background-color: #ffffff; */
  padding: 20px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
}

.chatroom-image {
  height: 70%;
  max-width: 90%;
  object-fit: contain;
}
</style>
