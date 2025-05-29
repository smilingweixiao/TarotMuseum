<template>
  <div class="card">
    <Menubar :model="items" style="border-radius: 0; border: none" class="menubar" />
  </div>
</template>

<script setup lang="ts">
import Menubar from 'primevue/menubar'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const items = ref([
  {
    label: 'Home',
    icon: 'pi pi-home',
    command: () => {
      router.push({ path: '/home' })
      document.body.scrollTo({ top: 0, behavior: 'smooth' })
      document.documentElement.scrollTo({ top: 0, behavior: 'smooth' })
    },
    to: '/home',
  },
  {
    label: 'The Major Arcana',
    icon: 'pi pi-star-fill',
    command: () => {
      router.push({ path: '/major-arcana' })
      document.body.scrollTo({ top: 0, behavior: 'smooth' })
      document.documentElement.scrollTo({ top: 0, behavior: 'smooth' })
    },
    to: '/major-arcana',
  },
  {
    label: 'The Minor Arcana',
    icon: 'pi pi-star',
    command: () => {
      router.push({ path: '/minor-arcana' })
      document.body.scrollTo({ top: 0, behavior: 'smooth' })
      document.documentElement.scrollTo({ top: 0, behavior: 'smooth' })
    },
    to: '/minor-arcana',
  },

  {
    label: 'Fortune Telling',
    icon: 'pi pi-sparkles',
    command: () => {
      router.push({ path: '/fortune-telling' })
      document.body.scrollTo({ top: 0, behavior: 'smooth' })
      document.documentElement.scrollTo({ top: 0, behavior: 'smooth' })
    },
    to: '/fortune-telling',
  },
])
</script>

<style scoped>
.menubar {
  position: fixed;
  top: 0;
  width: 100%;
  transition: background-color 0.3s ease;
  z-index: 999;
  background-color: rgba(255, 255, 255, 0.8);
  display: flex;
  justify-content: center;
}
</style>
