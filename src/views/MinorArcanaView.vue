<template>
  <div class="nav-bar">
    <NavBar></NavBar>
  </div>
  <div class="main w-full h-full">
    <div class="intro-section" ref="introSection">
      <div class="intro-text">
        <h2>{{ currentIntro.title }}</h2>
        <p v-for="(para, i) in currentIntro.paragraphs" :key="i">{{ para }} <br /><br /></p>
      </div>
    </div>
    <MinorPanel ref="MinorPanelSection"></MinorPanel>
  </div>
  <BottomFooter></BottomFooter>
</template>

<script setup lang="ts">
import NavBar from '@/components/NavBar.vue'

import MinorPanel from '@/components/MinorPanel.vue'
import BottomFooter from '@/components/BottomFooter.vue'

import { ref } from 'vue'

const intros = [
  {
    title: 'About The Minor Arcana',
    paragraphs: [
      '小阿爾克那（Minor Arcana）由56張牌組成，分為四個元素主題：金幣（Pentacles）、聖杯（Cups）、寶劍（Swords）、權杖（Wands）。每一組牌都以獨特的圖像語彙表達出物質、情感、思想與行動的多重層次。',
      '這些細緻的插畫蘊含著大量的視覺符號與文化象徵，使每張牌在藝術層面上具有高度的可讀性與詮釋空間。透過人物姿態、背景構圖與色彩配置，小阿爾克那不僅補充了大阿爾克那的宏大敘事，也豐富了塔羅牌整體的藝術表現力。',
    ],
  },
]

const currentIntro = ref(intros[0])
</script>

<style scoped>
.main {
  width: 100%;
  max-width: 100%;
  /* height: 100%; */
  display: flex;
  flex-direction: column;
  gap: 3rem;
}

.intro-section {
  height: 80vh;
  background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.8)), url('/intro-bg.jpg');
  background-size: cover;
  background-position: center;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 20px 10%;
}

.intro-text {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity: 1;
}

.intro-text h2 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  font-weight: bolder;
}

.intro-text p {
  font-size: 1.2rem;
  line-height: 1.6;
  font-weight: bold;
}

.more {
  /* center */
  margin: 20px auto;
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 20px 10%;

  /* background-color: #f0f0f0; */
  border-radius: 20px;
  border-width: 2px;
  border-style: dashed;
  border-color: #f59e0b;
}
.more-text {
  font-size: 1.2rem;
  margin-bottom: 20px;
}

@keyframes typing {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}

@keyframes blink-caret {
  0%,
  100% {
    border-color: transparent;
  }
  50% {
    border-color: white;
  }
}
</style>
