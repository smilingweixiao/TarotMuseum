<template>
  <div class="nav-bar">
    <NavBar
      :scrollToTop="scrollToTop"
      :scrollToGallery="scrollToGallery"
      :scrollToMajorPanel="scrollToMajorPanel"
      :scrollToMinorPanel="scrollToMinorPanel"
      :scrollToIntro="scrollToIntro"
    ></NavBar>
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
        <h2>關於</h2>
        <p>
          我學習塔羅占卜已經有四年。對多數人來說，塔羅總帶著一層神祕甚至誤解的色彩。我希望透過這次線上展覽，用說故事的方式向大眾介紹塔羅牌的文化背景與圖案象徵意義，讓人們認識塔羅真正的樣貌，也讓更多人發現，塔羅不只是占卜，更是一種自我對話的語言。
        </p>
        <br />
        <p>本次展覽將會聚焦在大阿爾克那的愚者之旅，帶領觀眾一同進入塔羅的世界</p>
      </div>
    </div>
    <CardDisplay ref="gallerySection"> </CardDisplay>
    <MajorPanel ref="majorPanelSection">
      <template #title>愚者</template>
      <template #description>
        一開始，愚者（The
        Fool）像個沒什麼經驗的年輕人，背著簡單的包袱，充滿好奇心地出發了。他沒有害怕，覺得一切都很新鮮。
      </template>
    </MajorPanel>
    <MajorPanel direction="reverse">
      <template #title>啟程</template>
      <template #description>
        他遇見了一位很厲害的魔術師（The
        Magician），發現自己其實擁有掌控世界的力量。然後碰到了女祭司（The High
        Priestess），開始了解內心深處的神秘與秘密。 接下來，他遇到充滿生命力與關懷的皇后（The
        Empress），感受到大自然的滋養。皇帝（The Emperor）則教他什麼是秩序與規矩。教皇（The
        Hierophant）帶他學習傳統的智慧與信仰，最後遇見戀人（The
        Lovers），他開始理解愛情、選擇和關係的重要。 愚者繼續前行，遇到戰車（The
        Chariot），最後學會用堅定的意志克服障礙。
      </template>
    </MajorPanel>
    <MajorPanel>
      <template #title>啟蒙</template>
      <template #description>
        力量（Strength）教他內心的勇敢與自我控制。隱者（The
        Hermit）讓他學會獨自思考，尋找自己內心的真理。 命運之輪（The Wheel of
        Fortune）提醒他，人生有起有落，不斷輪迴。正義（The
        Justice）告訴他要對自己的選擇負責，保持公平與平衡。倒吊人（The Hanged
        Man）帶來新的視角，學會放下與犧牲。死神（The
        Death）象徵結束與新生，他迎來了重要的轉變和蛻變。最後，節制（The
        Temperance）教他如何找到內心的平衡與和諧。</template
      >
    </MajorPanel>
    <MajorPanel direction="reverse">
      <template #title>回歸</template>
      <template #description>
        接著，魔鬼（The Devil）象徵他面對誘惑與束縛，必須克服內心的黑暗面。塔（The
        Tower）帶來突如其來的劇變與破壞，雖然痛苦，但卻促成蛻變。 星星（The
        Star）帶來希望與療癒，月亮（The Moon）則讓他挑戰直覺與幻象。太陽（The
        Sun）象徵成功與快樂的時刻。最後，審判（The Judgement）帶來覺醒和重生，而世界（The
        World）代表旅程的圓滿與完成，愚者終於達成了真正的自我整合。</template
      >
    </MajorPanel>
    <MinorPanel ref="MinorPanelSection"></MinorPanel>
  </div>
  <BottomFooter></BottomFooter>
</template>

<script setup lang="ts">
import NavBar from '@/components/NavBar.vue'
import CardDisplay from '@/components/CardDisplay.vue'
import MajorPanel from '@/components/MajorPanel.vue'
import MinorPanel from '@/components/MinorPanel.vue'
import BottomFooter from '@/components/BottomFooter.vue'
import { ref, onMounted, onBeforeUnmount } from 'vue'

const introVisible = ref(false)
const introSection = ref<HTMLElement | null>(null)
const gallerySection = ref<InstanceType<typeof CardDisplay> | null>(null)
const majorPanelSection = ref<InstanceType<typeof MajorPanel> | null>(null)
const MinorPanelSection = ref<InstanceType<typeof MinorPanel> | null>(null)

const scrollToTop = () => {
  document.body.scrollTo({ top: 0, behavior: 'smooth' })
  document.documentElement.scrollTo({ top: 0, behavior: 'smooth' })
}
const scrollToIntro = () => {
  if (introSection.value) {
    introSection.value.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }
}

const scrollToGallery = () => {
  if (gallerySection.value) {
    gallerySection.value.$el.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }
}
const scrollToMajorPanel = () => {
  if (majorPanelSection.value) {
    majorPanelSection.value.$el.scrollIntoView({ behavior: 'smooth' })
  }
}
const scrollToMinorPanel = () => {
  if (MinorPanelSection.value) {
    MinorPanelSection.value.$el.scrollIntoView({ behavior: 'smooth' })
  }
}

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          introVisible.value = true
        }
      })
    },
    { threshold: 0.3 },
  )

  if (introSection.value) {
    observer.observe(introSection.value)
  }

  onBeforeUnmount(() => {
    if (introSection.value) observer.unobserve(introSection.value)
  })
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
}

.landing-text p {
  font-size: 1.3em;
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
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/intro-bg.jpg');
  background-size: cover;
  background-position: center;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 0 10%;
}
.intro-text {
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
}

.intro-text p {
  font-size: 1.2rem;
  line-height: 1.6;
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
