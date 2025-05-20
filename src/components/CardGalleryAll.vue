<template>
  <div class="gallery-container">
    <div class="gallery-content" :class="{ reverse: props.direction === 'reverse' }">
      <div class="title">
        <slot name="title">愚者</slot>
      </div>
      <div class="description">
        <slot name="description">
          首先，愚者（The Fool）的圖像是一個背著行囊、無畏站在懸崖邊緣的年輕
          人，象徵心靈準備冒險並探索未知世界的個體，可被視為榮格所說的愚者原型，
          代表無限的可能性和新旅程的開始。偉特將愚者形容為「求歷歷險的心靈」，等
          待著冒險的召喚，期待邁向更大的世界。這與坎伯所描述的英雄旅程相似：英雄
          離開日常生活，進入超自然奇蹟的領域，最終帶著給予同胞恩賜的力量回到現實世界。
        </slot>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps({
  direction: {
    type: String,
    default: 'normal',
  },
})
</script>
<style scoped>
.gallery-container {
  height: 80vh;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/landing.png');
  background-size: cover;
  background-position: center;
}
.gallery-content {
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100%;
  color: white;
  .title {
    font-size: 4rem;
    font-weight: bold;
    text-align: center;
    padding-left: 10%;
    padding-right: 10%;
  }
  .description {
    font-size: 1rem;
    text-align: center;
    padding-left: 10%;
    padding-right: 10%;
    background-color: rgba(0, 0, 0, 0.5);
    padding: 20px 40px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &.reverse {
    flex-direction: row-reverse;
  }
}
</style>
