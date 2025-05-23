<template>
  <div class="panel-container">
    <div class="panel-card">
      <div class="panel-content">
        <Galleria
          :value="pentsImages"
          containerStyle="width:100%; height:100%; border: none;"
          :showThumbnails="false"
          :showIndicators="true"
          :changeItemOnIndicatorHover="true"
          indicatorsPosition="left"
          :pt="{
            root: { style: { height: '100%', width: '100%' } },
            content: { style: { height: '100%', width: '100%' } },
            itemsContainer: {
              style: {
                height: '100%',
                width: '100%',
                padding: '15px 15px 15px 0',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
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
                width: '3vw',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                gap: 0,
              },
            },
            indicator: {
              style: {
                flex: 1,
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
          containerStyle="width:100%; height:100%; border: none;"
          :showThumbnails="false"
          :showIndicators="true"
          :changeItemOnIndicatorHover="true"
          indicatorsPosition="left"
          :pt="{
            root: { style: { height: '100%', width: '100%' } },
            content: { style: { height: '100%', width: '100%' } },
            itemsContainer: {
              style: {
                height: '100%',
                width: '100%',
                padding: '15px 15px 15px 0',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
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
                width: '3vw',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                gap: 0,
              },
            },
            indicator: {
              style: {
                flex: 1,
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
          containerStyle="width:100%; height:100%; border: none;"
          :showThumbnails="false"
          :showIndicators="true"
          :changeItemOnIndicatorHover="true"
          indicatorsPosition="left"
          :pt="{
            root: { style: { height: '100%', width: '100%' } },
            content: { style: { height: '100%', width: '100%' } },
            itemsContainer: {
              style: {
                height: '100%',
                width: '100%',
                padding: '15px 15px 15px 0',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
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
                width: '3vw',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                gap: 0,
              },
            },
            indicator: {
              style: {
                flex: 1,
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
          containerStyle="width:100%; height:100%; border: none;"
          :showThumbnails="false"
          :showIndicators="true"
          :changeItemOnIndicatorHover="true"
          indicatorsPosition="left"
          :pt="{
            root: { style: { height: '100%', width: '100%' } },
            content: { style: { height: '100%', width: '100%' } },
            itemsContainer: {
              style: {
                height: '100%',
                width: '100%',
                padding: '15px 15px 15px 0',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
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
                width: '3vw',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                gap: 0,
              },
            },
            indicator: {
              style: {
                flex: 1,
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
        金幣（Pentacles）象徵著「土元素」的穩定與實踐，是塔羅藝術中對物質世界最具象的描繪。在圖像構成中，金幣牌系統常展現農作田園、匠人工坊與建築空間，呈現人類與土地之間的深層連結。金幣上的圖騰與符號，猶如古代貨幣上的神聖紋飾，不僅是財富的象徵，也承載了文化與價值的傳承。透過具象的構圖與沉穩色彩，金幣描繪出一種「創造實體」的藝術語言，引導我們關注日常、身體與實踐中的美學。
        <br />
        <br />
        聖杯（Cups）屬於「水元素」，在塔羅藝術中是情感、直覺與靈性流動的視覺詮釋。聖杯牌組往往展現湖水、河流、淚水與溫柔的人物互動，傳遞出潛意識與情感交會的靜謐氣氛。杯器本身造型多樣，從華麗聖器到簡約陶杯，各自承載不同的情感層次與心靈故事。藝術家藉由柔和的色彩與水的象徵，讓聖杯成為內在世界的容器，映照人們對愛、關係與自我認同的渴望。
        <br />
        <br />
        寶劍（Swords）所對應的是「風元素」，代表理智、語言與衝突。在塔羅藝術中，寶劍牌充滿張力與動態性，其畫面常見暴風、利刃交鋒與內心劇場的視覺張力。劍的形狀筆直、尖銳，是分辨與斷裂的象徵，也是一種思考的藝術手段。寶劍牌組引導觀者正視思想與決斷的力量，其冷峻的美學風格，突顯內在鬥爭與真理探尋的精神維度，是塔羅中最具哲學性與戲劇性的系列。
        <br />
        <br />
        權杖（Wands）代表「火元素」，是熱情、創造與生命力的象徵。在塔羅藝術中，權杖牌充滿動態與冒險精神，常出現旅者、山野、火焰與新芽的意象，呈現出精神意志的覺醒與推動。木製權杖蘊含自然能量，是古代巫師、王者與先知的象徵物，帶有原始而神聖的力量。藝術構圖上，多以鮮明色彩與強烈姿態，表現人的願景與行動力，是塔羅中表達「生命動能」最直接的系列。
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Galleria from 'primevue/galleria'
import { PhotoService } from '@/service/PhotoService'
import { ref, onMounted } from 'vue'

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
  /* height: 80vh; */
  background-color: #f0f0f0;
  flex-wrap: wrap;
  gap: 20px;
  padding: 20px;
}

.panel-card {
  min-width: 280px;
  /* min-width: fit-content; */
  width: 20%;
  /* height: 60vh; */
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
}

.panel-content {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.panel-description {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.description-text {
  font-size: 1.2rem;
  width: 95%;
  color: #333;
}
</style>
