<template>
  <div class="panel-container">
    <div class="panel-content" :class="{ reverse: props.direction === 'reverse' }">
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
.panel-container {
  width: 100vw;
  min-height: 60vh;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/landing.png');
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.panel-content {
  display: flex;
  flex-direction: row;
  width: 100%;
  color: white;
  flex: 1;

  .title {
    font-size: 4rem;
    font-weight: bold;
    padding-left: 10%;
    padding-right: 10%;
    display: flex;

    align-items: center;
  }

  .description {
    font-size: 1.2rem;
    text-align: center;
    padding-left: 10%;
    padding-right: 10%;
    background-color: rgba(0, 0, 0, 0.5);
    padding-top: 60px;
    padding-bottom: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
  }

  &.reverse {
    flex-direction: row-reverse;
  }
}
</style>
