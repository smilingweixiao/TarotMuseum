<template>
  <div class="nav-bar">
    <NavBar></NavBar>
  </div>
  <div class="main w-full h-full">
    <div class="landing-section">
      <div class="landing-text">
        <h1 class="title">塔羅牌大阿爾克那線上展 The Major Arcana</h1>
        <p class="title-description">啟程愚者之旅 The Fool's Journey</p>
      </div>
    </div>
    <div class="intro-section" ref="introSection">
      <div class="intro-text" :class="{ visible: introVisible }">
        <h2>{{ currentIntro.title }}</h2>
        <p v-for="(para, i) in currentIntro.paragraphs" :key="i">{{ para }} <br /><br /></p>
      </div>
      <div class="dots">
        <span
          v-for="(intro, i) in intros"
          :key="i"
          :class="{ active: i === currentIntroIndex }"
          @click="goToSlide(i)"
        ></span>
      </div>
    </div>

    <div class="info-section">
      <div class="author">
        <div class="info-title">作者資訊</div>
        <div class="info-content">
          我是張雅惠，來自清華大學資工系25級。平日休閒是研究塔羅牌與串珠。如果對此網站有任何問題想要進行討論，歡迎寄信到我的信箱！
        </div>
      </div>
      <div class="web">
        <div class="info-title">塔羅資訊</div>
        <div class="info-content">
          <p>
            <span class="highlight">塔羅占卜依賴的是對圖像與象徵的解讀，</span
            >而這些圖像與象徵本身就是一種藝術表現。
          </p>
          <br />
          <p>
            <span class="highlight">一千個人占卜有一千個結果，</span
            >因為每個人對圖像的解讀都不盡相同。
            塔羅牌的藝術價值在於它能夠激發觀者的想像力與情感共鳴，讓人們在解讀過程中找到自己的故事與意義。
          </p>
          <br />
          <p>
            塔羅牌共計78張，其中包含22張代表人生重要階段與精神成長歷程的<span class="highlight"
              >「大阿爾克那」</span
            >，以及56張描繪日常經驗與情感變化的<span class="highlight">「小阿爾克那」</span
            >。每一張牌都蘊含獨特的符號與寓意，構築出一座神秘又充滿想像的象徵宇宙。
          </p>
          <br />
          <p>
            為了讓大眾更貼切地感受塔羅牌的藝術魅力，我選擇了<span class="highlight">愚者之旅</span
            >作為展覽的主題，並透過分析塔羅牌的圖案內容，建立觀眾與塔羅的情感聯繫。
          </p>
        </div>
      </div>

      <div class="recommendation">
        <div class="info-title">推薦閱覽順序</div>
        <div class="info-content">
          <ol type="1">
            <li>
              1.
              <Button
                label="進入大阿爾克那介紹廊道"
                class="p-button-outlined"
                @click="goToMajorArcana"
              />
            </li>
            <li>
              2.
              <Button
                label="進入小阿爾克那介紹廊道"
                class="p-button-outlined"
                @click="goToMinorArcana"
              />
            </li>
            <li>
              3.
              <Button label="進入解牌聊天室" class="p-button-outlined" @click="goToChatroom" />
            </li>
          </ol>
        </div>
      </div>
    </div>
  </div>
  <BottomFooter></BottomFooter>
</template>

<script setup lang="ts">
import NavBar from '@/components/NavBar.vue'

import BottomFooter from '@/components/BottomFooter.vue'
import { Button } from 'primevue'
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const introVisible = ref(false)

const goToMajorArcana = () => {
  router.push({ path: '/major-arcana' })
  document.body.scrollTo({ top: 0, behavior: 'smooth' })
  document.documentElement.scrollTo({ top: 0, behavior: 'smooth' })
}

const goToMinorArcana = () => {
  router.push({ path: '/minor-arcana' })
  document.body.scrollTo({ top: 0, behavior: 'smooth' })
  document.documentElement.scrollTo({ top: 0, behavior: 'smooth' })
}

const goToChatroom = () => {
  router.push({ path: '/fortune-telling' })
  document.body.scrollTo({ top: 0, behavior: 'smooth' })
  document.documentElement.scrollTo({ top: 0, behavior: 'smooth' })
}

const currentIntroIndex = ref(0)

const intros = [
  {
    title: 'About The Tarot Exhibition',
    paragraphs: [
      '我學習塔羅占卜已經有四年。對多數人來說，塔羅總帶著一層神祕甚至誤解的色彩。我希望透過這次線上展覽，用說故事的方式向大眾介紹塔羅牌的文化背景與圖案象徵意義，讓人們認識塔羅真正的樣貌，也讓更多人發現，塔羅不只是占卜，更是一種自我對話的語言。',
      '本次展覽將會聚焦在大阿爾克那的愚者之旅，透過分析塔羅牌的圖案內容，建立觀眾與塔羅的情感聯繫。',
    ],
  },
  {
    title: 'About The Major Arcana',
    paragraphs: [
      '大阿爾克那（Major Arcana）由22張象徵人生歷程的牌組成，是塔羅藝術中最具代表性的部分。每張牌都像是一幅獨立的畫作，透過構圖、色彩、人物動作與象徵符號，呈現出深層的精神意涵與哲學思考。',
      '從愚者（The Fool）的起點出發，到世界（The World）的終點，每一張牌都是一個視覺化的旅程，帶領觀者探索成長、抉擇、試煉與覺醒。這不僅是一種占卜工具，更是一系列講述人類經驗的藝術品。',
    ],
  },
  {
    title: 'About The Minor Arcana',
    paragraphs: [
      '小阿爾克那（Minor Arcana）由56張牌組成，分為四個元素主題：金幣（Pentacles）、聖杯（Cups）、寶劍（Swords）、權杖（Wands）。每一組牌都以獨特的圖像語彙表達出物質、情感、思想與行動的多重層次。',
      '這些細緻的插畫蘊含著大量的視覺符號與文化象徵，使每張牌在藝術層面上具有高度的可讀性與詮釋空間。透過人物姿態、背景構圖與色彩配置，小阿爾克那不僅補充了大阿爾克那的宏大敘事，也豐富了塔羅牌整體的藝術表現力。',
    ],
  },
]

const currentIntro = ref(intros[0])
let intervalId: number | null = null

const nextSlide = () => {
  showSlide((currentIntroIndex.value + 1) % intros.length)
  resetAutoSlide()
}

const startAutoSlide = () => {
  intervalId = setInterval(() => {
    nextSlide()
  }, 20000)
}

const resetAutoSlide = () => {
  if (intervalId !== null) {
    clearInterval(intervalId)
  }
  startAutoSlide()
}

const showSlide = (index: number) => {
  introVisible.value = false
  setTimeout(() => {
    currentIntroIndex.value = index
    currentIntro.value = intros[index]
    introVisible.value = true
  }, 500)
}

const goToSlide = (index: number) => {
  showSlide(index)
  resetAutoSlide()
}

onMounted(() => {
  showSlide(currentIntroIndex.value)
  startAutoSlide()
})
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

.landing-section {
  background-image: url('/landing.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.landing-text {
  color: white;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 20px 40px;
  border-radius: 10px;
}

.landing-text h1 {
  font-size: 2.5em;
  margin-bottom: 10px;
  font-weight: bolder;
}

.landing-text p {
  font-size: 1.3em;
  font-weight: bold;
}

.title {
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  border-right: 3px solid white;
  animation:
    typing 3s steps(30, end) forwards,
    blink-caret 0.7s step-end infinite;
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
  opacity: 0;
  transform: translateY(30px);
  transition:
    opacity 1.2s ease,
    transform 1.2s ease;
}

.intro-text.visible {
  opacity: 1;
  transform: translateY(0);
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

.dots {
  display: flex;
  justify-content: center;
  /* margin-top: 15px; */
  margin-bottom: 15px;
  gap: 8px;
}

.dots span {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: #cccccc;
  cursor: pointer;
  transition: background-color 0.3s;
}

.dots span.active {
  background-color: #f59e0b;
}

.dots span:hover {
  background-color: #fbbf24;
}

.info-section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: start;
  padding: 20px 10%;
}

.author {
  width: 100%;
  max-width: 800px;

  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.web {
  width: 100%;
  max-width: 800px;

  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.recommendation {
  width: 100%;
  max-width: 800px;

  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  li {
    margin-bottom: 10px;
  }
}

.info-title {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 10px;
}
.info-content {
  font-size: 1rem;
  margin-bottom: 10px;
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

.highlight {
  font-weight: bold;
  color: #f59e0b;
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
