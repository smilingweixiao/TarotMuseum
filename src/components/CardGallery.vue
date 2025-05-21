<template>
  <div class="card-container">
    <Galleria
      :value="images"
      :responsiveOptions="responsiveOptions"
      :numVisible="5"
      containerStyle="margin: 0 auto; border:none;"
      :showItemNavigators="true"
      :showItemNavigatorsOnHover="true"
      :circular="true"
      :autoPlay="true"
      :transitionInterval="2500"
      :activeIndex="activeIndex"
      @update:activeIndex="(val) => handleActiveIndexChange(val)"
    >
      <template #thumbnail="slotProps">
        <img
          :src="slotProps.item.thumbnailImageSrc"
          :alt="slotProps.item.alt"
          style="width: auto; display: block"
          @click.capture="
            () => {
              popupVisible = true
            }
          "
        />
      </template>
    </Galleria>
    <div class="card-popup" v-if="popupVisible" @click.self="popupVisible = false">
      <div class="card-popup-content" @click.self="popupVisible = false">
        <img
          :src="images[activeIndex].itemImageSrc"
          :alt="images[activeIndex].alt"
          style="max-height: 80vh; display: block"
        />
        <Button
          severity="secondary"
          variant="text"
          rounded
          aria-label="Cancel"
          icon="pi pi-times"
          @click="popupVisible = false"
          style="position: absolute; top: -40px; right: -40px"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Galleria from 'primevue/galleria'
import { ref, onMounted } from 'vue'
import { PhotoService } from '@/service/PhotoService'
import { defineProps } from 'vue'
import { Button } from 'primevue'

onMounted(() => {
  PhotoService.getImages().then((data) => (images.value = data))
})

const images = ref()
const activeIndex = ref(0)
const popupVisible = ref(false)

const responsiveOptions = ref([
  {
    breakpoint: '1300px',
    numVisible: 4,
  },
  {
    breakpoint: '575px',
    numVisible: 1,
  },
])

const handleActiveIndexChange = (index: number) => {
  activeIndex.value = index
  if (index === 0) {
    props.activateCallback('1')
  } else if (index >= 1 && index <= 7) {
    props.activateCallback('2')
  } else if (index >= 8 && index <= 14) {
    props.activateCallback('3')
  } else {
    props.activateCallback('4')
  }
}

const props = defineProps({
  activateCallback: {
    type: Function,
    default: () => {},
  },
})
</script>

<style scoped>
.card-container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.card-popup {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.card-popup-content {
  position: relative;
  /* /* width: fit-content;
  height: fit-content; */
  /* max-width: max-content; */
  max-height: max-content;

  /* width: 80%; */
  /* height: 80%; */
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
