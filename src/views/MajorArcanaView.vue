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
    <CardDisplay> </CardDisplay>
    <MajorPanel>
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

    <!-- <div class="more" ref="moreSection">
      <div class="more-text">
        塔羅不只是占卜，更是一場與圖像與象徵的深層對話。每一張牌都是一幅蘊含情感與故事的藝術作品。<br />透過解牌聊天室，你將親自參與詮釋，與塔羅藝術建立連結，讓每一次占卜成為專屬於你的心靈旅程。
      </div>
      <div class="more-button">
        <Button label="進入解牌聊天室" class="p-button-outlined" @click="goToChatroom" />
      </div>
    </div> -->
  </div>
  <BottomFooter></BottomFooter>
</template>

<script setup lang="ts">
import NavBar from '@/components/NavBar.vue'
import CardDisplay from '@/components/CardDisplay.vue'
import MajorPanel from '@/components/MajorPanel.vue'

import BottomFooter from '@/components/BottomFooter.vue'

import { ref } from 'vue'

const intros = [
  {
    title: 'About The Major Arcana',
    paragraphs: [
      '大阿爾克那（Major Arcana）由22張象徵人生歷程的牌組成，是塔羅藝術中最具代表性的部分。每張牌都像是一幅獨立的畫作，透過構圖、色彩、人物動作與象徵符號，呈現出深層的精神意涵與哲學思考。',
      '從愚者（The Fool）的起點出發，到世界（The World）的終點，每一張牌都是一個視覺化的旅程，帶領觀者探索成長、抉擇、試煉與覺醒。這不僅是一種占卜工具，更是一系列講述人類經驗的藝術品。',
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
