<template>
  <div class="card">
    <Menubar :model="items" style="border-radius: 0; border: none" class="menubar" />
  </div>
</template>

<script setup lang="ts">
import Menubar from 'primevue/menubar'
import { ref, defineProps } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const props = defineProps({
  scrollToTop: {
    type: Function,
    default: () => {
      document.body.scrollTo({ top: 0, behavior: 'smooth' })
    },
  },
  scrollToIntro: {
    type: Function,
    default: () => {
      document.body.scrollTo({ top: 0, behavior: 'smooth' })
    },
  },
  scrollToGallery: {
    type: Function,
    default: () => {
      document.body.scrollTo({ top: 0, behavior: 'smooth' })
    },
  },
  scrollToMajorPanel: {
    type: Function,
    default: () => {
      document.body.scrollTo({ top: 0, behavior: 'smooth' })
    },
  },
  scrollToMinorPanel: {
    type: Function,
    default: () => {
      document.body.scrollTo({ top: 0, behavior: 'smooth' })
    },
  },
  scrollToMore: {
    type: Function,
    default: () => {
      document.body.scrollTo({ top: 0, behavior: 'smooth' })
    },
  },
})

const items = ref([
  {
    label: 'Home',
    icon: 'pi pi-home',
    command: () => props.scrollToTop,
  },
  {
    label: 'Topic',
    icon: 'pi pi-search',
    items: [
      {
        label: 'About',
        icon: 'pi pi-info-circle',
        command: () => props.scrollToIntro,
      },

      {
        label: 'Journey Map',
        icon: 'pi pi-map',
        command: () => props.scrollToGallery,
      },
      {
        label: 'The Major Arcana',
        icon: 'pi pi-star-fill',
        command: () => props.scrollToMajorPanel,
      },
      {
        label: 'The Minor Arcana',
        icon: 'pi pi-star',
        command: () => props.scrollToMinorPanel,
      },

      {
        label: 'More',
        icon: 'pi pi-sparkles',
        command: () => props.scrollToMore,
      },
    ],
  },
  {
    label: 'Fortune Telling',
    icon: 'pi pi-sparkles',
    command: () => {
      router.push({ path: '/fortune-telling' })
      document.body.scrollTo({ top: 0, behavior: 'smooth' })
      document.documentElement.scrollTo({ top: 0, behavior: 'smooth' })
    },
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
}
</style>
