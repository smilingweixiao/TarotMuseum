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
    <div class="chatroom-illustration"></div>
    <div class="chatroom-box"></div>
  </div>
  <BottomFooter></BottomFooter>
</template>

<script setup lang="ts">
import NavBar from '@/components/NavBar.vue'
import BottomFooter from '@/components/BottomFooter.vue'
import { useRouter } from 'vue-router'
// import { PhotoService } from '@/service/PhotoService'

const router = useRouter()
// const image = PhotoService.randomGetImages()

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
  justify-content: center;
  align-items: center;
}
</style>
