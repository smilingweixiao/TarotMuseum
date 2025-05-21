<template>
  <div class="card">
    <Menubar :model="items" style="border-radius: 0; border: none" class="menubar" />
  </div>
</template>

<script setup lang="ts">
import Menubar from 'primevue/menubar'
import { ref, defineProps } from 'vue'

const scrollToTop = () => {
  document.body.scrollTo({ top: 0, behavior: 'smooth' })
  document.documentElement.scrollTo({ top: 0, behavior: 'smooth' })
}

const props = defineProps({
  scrollToIntro: {
    type: Function,
    default: () => {},
  },
  scrollToGallery: {
    type: Function,
    default: () => {},
  },
  scrollToMajorPanel: {
    type: Function,
    default: () => {},
  },
  scrollToMinorPanel: {
    type: Function,
    default: () => {},
  },
})

const items = ref([
  {
    label: 'Home',
    icon: 'pi pi-home',
    command: scrollToTop,
  },
  {
    label: 'Topic',
    icon: 'pi pi-search',
    items: [
      {
        label: 'Introduction',
        icon: 'pi pi-info-circle',
        command: props.scrollToIntro,
      },

      {
        label: 'Journey Map',
        icon: 'pi pi-map',
        command: props.scrollToGallery,
      },
      {
        label: 'The Major Arcana',
        icon: 'pi pi-star-fill',
        command: props.scrollToMajorPanel,
      },
      {
        label: 'The Minor Arcana',
        icon: 'pi pi-star',
        command: props.scrollToMinorPanel,
      },

      {
        label: 'More',
        icon: 'pi pi-sparkles',
      },
    ],
  },
  {
    label: 'Story',
    icon: 'pi pi-book',
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

/* .menubar-wrapper.scrolled {
  background-color: white;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
} */
</style>
