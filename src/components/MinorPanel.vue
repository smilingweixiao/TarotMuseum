<template>
  <div class="panel-container">
    <div class="panel-card">
      <div class="panel-content">
        <Galleria
          :value="pentsImages"
          containerStyle="width:100%; border: none;"
          :showThumbnails="false"
          :showIndicators="true"
          :changeItemOnIndicatorHover="true"
          indicatorsPosition="left"
          :pt="{
            root: { style: { height: '100%' } },
            content: { style: { height: '100%' } },
            itemsContainer: {
              style: {
                height: '100%',
                padding: '15px 15px 15px 0',
              },
            },
            items: {
              style: { height: '100%' },
            },
            item: {
              style: {
                height: '100%',
              },
            },
            indicatorList: {
              style: {
                width: '3.5vw',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                gap: 0,
                flexGrow: 1,
              },
            },
            indicator: {
              style: {
                flex: 1,
                fontSize: '2.5vh',
              },
            },
          }"
        >
          <template #item="slotProps">
            <img
              :src="slotProps.item.itemImageSrc"
              :alt="slotProps.item.alt"
              style="object-fit: contain; display: block; height: 100%"
            />
          </template>
        </Galleria>
      </div>
    </div>
    <div class="panel-card">
      <div class="panel-content">
        <Galleria
          :value="cupsImages"
          containerStyle="width:100%; border: none;"
          :showThumbnails="false"
          :showIndicators="true"
          :changeItemOnIndicatorHover="true"
          indicatorsPosition="left"
          :pt="{
            root: { style: { height: '100%' } },
            content: { style: { height: '100%' } },
            itemsContainer: {
              style: { height: '100%', padding: '15px 15px 15px 0' },
            },
            items: {
              style: { height: '100%' },
            },
            item: {
              style: {
                height: '100%',
              },
            },
            indicatorList: {
              style: {
                width: '3.5vw',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                gap: 0,
                flexGrow: 1,
              },
            },
            indicator: {
              style: {
                flex: 1,
                fontSize: '2.5vh',
              },
            },
          }"
        >
          <template #item="slotProps">
            <img
              :src="slotProps.item.itemImageSrc"
              :alt="slotProps.item.alt"
              style="object-fit: contain; display: block; height: 100%"
            />
          </template>
        </Galleria>
      </div>
    </div>
    <div class="panel-card">
      <div class="panel-content">
        <Galleria
          :value="swordsImages"
          containerStyle="width:100%; border: none;"
          :showThumbnails="false"
          :showIndicators="true"
          :changeItemOnIndicatorHover="true"
          indicatorsPosition="left"
          :pt="{
            root: { style: { height: '100%' } },
            content: { style: { height: '100%' } },
            itemsContainer: {
              style: { height: '100%', padding: '15px 15px 15px 0' },
            },
            items: {
              style: { height: '100%' },
            },
            item: {
              style: {
                height: '100%',
              },
            },
            indicatorList: {
              style: {
                width: '3.5vw',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                gap: 0,
                flexGrow: 1,
              },
            },
            indicator: {
              style: {
                flex: 1,
                fontSize: '2.5vh',
              },
            },
          }"
        >
          <template #item="slotProps">
            <img
              :src="slotProps.item.itemImageSrc"
              :alt="slotProps.item.alt"
              style="object-fit: contain; display: block; height: 100%"
            />
          </template>
        </Galleria>
      </div>
    </div>
    <div class="panel-card">
      <div class="panel-content">
        <Galleria
          :value="wandsImages"
          containerStyle="width:100%; border: none;"
          :showThumbnails="false"
          :showIndicators="true"
          :changeItemOnIndicatorHover="true"
          indicatorsPosition="left"
          :pt="{
            root: { style: { height: '100%' } },
            content: { style: { height: '100%' } },
            itemsContainer: {
              style: { height: '100%', padding: '15px 15px 15px 0' },
            },
            items: {
              style: { height: '100%' },
            },
            item: {
              style: {
                height: '100%',
              },
            },
            indicatorList: {
              style: {
                width: '3.5vw',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                gap: 0,
                flexGrow: 1,
              },
            },
            indicator: {
              style: {
                flex: 1,
                fontSize: '2.5vh',
              },
            },
          }"
        >
          <template #item="slotProps">
            <img
              :src="slotProps.item.itemImageSrc"
              :alt="slotProps.item.alt"
              style="object-fit: contain; display: block; height: 100%"
            />
          </template>
        </Galleria>
      </div>
    </div>
    <div class="panel-description">
      <div class="description-text">
        Minor Arcana
        由四組牌組成，分別是金幣（Pentacles）、聖杯（Cups）、寶劍（Swords）和權杖（Wands）。這些牌組象徵著不同的元素和生活領域，並且在每個組別中都有數字牌和宮廷牌。數字牌從
        Ace 到 10，宮廷牌則包括國王（Knight）、皇后（Queen）、騎士（King）和侍者（Page）。
        <br />
        <br />
        每個元素的 Minor Arcana
        牌組都代表著不同的生活領域和經驗，並且在占卜中提供了更具體的指導和洞察力。
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Galleria from 'primevue/galleria'
import { PhotoService } from '@/service/PhotoService'
import { ref, onMounted } from 'vue'
import type { display } from '@primeuix/themes/aura/inplace'
import type { flattenDiagnosticMessageText } from 'typescript'
const images = ref()

const cupsImages = ref()
const swordsImages = ref()
const wandsImages = ref()
const pentsImages = ref()

onMounted(() => {
  PhotoService.getImages().then((data) => (images.value = data))
  PhotoService.getCupsImages().then((data) => (cupsImages.value = data))
  PhotoService.getSwordsImages().then((data) => (swordsImages.value = data))
  PhotoService.getWandsImages().then((data) => (wandsImages.value = data))
  PhotoService.getPentsImages().then((data) => (pentsImages.value = data))
})
</script>

<style scoped>
.panel-container {
  display: flex;
  justify-content: space-around;
  align-items: center;
  min-height: 80vh;
  width: 100%;
  background-color: #f0f0f0;
  flex-wrap: wrap;
  gap: 20px;
  padding: 20px;
}

.panel-card {
  min-width: 320px;
  width: 20%;
  height: 60vh;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
}

.panel-content {
  width: fit-content;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  /* font-size: 2rem; */
}

.panel-description {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.description-text {
  /* text-align: center; */
  width: 90%;
  color: #333;
}
</style>
