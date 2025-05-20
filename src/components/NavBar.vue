<template>
  <div class="card">
    <Menubar :model="items" style="border-radius: 0; border: none" class="menubar" />
  </div>
</template>

<script setup lang="ts">
import Menubar from 'primevue/menubar'
import { ref } from 'vue'
const items = ref([
  {
    label: 'Home',
    icon: 'pi pi-home',
  },
  {
    label: 'Features',
    icon: 'pi pi-star',
  },
  // {
  //   label: 'Projects',
  //   icon: 'pi pi-search',
  //   items: [
  //     {
  //       label: 'Components',
  //       icon: 'pi pi-bolt',
  //     },
  //     {
  //       label: 'Blocks',
  //       icon: 'pi pi-server',
  //     },
  //     {
  //       label: 'UI Kit',
  //       icon: 'pi pi-pencil',
  //     },
  //     {
  //       label: 'Templates',
  //       icon: 'pi pi-palette',
  //       items: [
  //         {
  //           label: 'Apollo',
  //           icon: 'pi pi-palette',
  //         },
  //         {
  //           label: 'Ultima',
  //           icon: 'pi pi-palette',
  //         },
  //       ],
  //     },
  //   ],
  // },
  {
    label: 'Contact',
    icon: 'pi pi-envelope',
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
