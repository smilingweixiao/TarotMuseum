<template>
  <div class="nav-bar"><NavBar></NavBar></div>
  <div class="main w-full h-full">
    <div class="landing-section">
      <div class="landing-text">
        <h1 class="title">塔羅牌大阿爾克那線上展 The Major Arcana</h1>
        <p class="title-description">啟程愚者之旅 Embark on the Fool's Journey</p>
      </div>
    </div>
    <CardDisplay> </CardDisplay>
    <CardGalleryAll>
      <template #title>愚者</template>
      <template #description>
        首先，愚者（The
        Fool）的圖像是一個背著行囊、無畏站在懸崖邊緣的年輕人，象徵心靈準備冒險並探索未知世界的個體，可被視為榮格所說的愚者原型，代表無限的可能性和新旅程的開始。偉特將愚者形容為「求歷歷險的心靈」，等待著冒險的召喚，期待邁向更大的世界。這與坎伯所描述的英雄旅程相似：英雄離開日常生活，進入超自然奇蹟的領域，最終帶著給予同胞恩賜的力量回到現實世界。
      </template>
    </CardGalleryAll>
    <CardGalleryAll direction="reverse">
      <template #title>啟程</template>
      <template #description>
        愚者的召喚來自於魔術師（The Magician）與女祭司。（The High
        Priestess）。魔術師展示了人內在的神性和精神自由，女祭司則象徵神性的女性特質，代表著神秘的隱藏面向。這些形象成為愚者追歷的精神典範。然而，英雄也可能拒絕召喚，依戀於世俗的利益，如皇后（The
        Empress）與皇帝（The
        Emperor）所代表的享樂與權威，這些世俗誘惑可能成為愚者前往英雄歷程的障礙。
        <br />
        <br />
        接受召喚的愚者在旅程中得到他人的幫助，如教皇（ The Hierophant）和戀人（ The
        Lovers）。教皇代表精神導師，提供精神引導和神性的服從；戀人牌象徵愛戀關係中的幫助，如同神話中為愛而幫助英雄的女神或公主。坎伯認為，英雄與女性的結合象徵對生命的完全掌握，戀人牌中的三角形構圖連結了男、女與神聖力量，賦予精神生活昇華的神聖意涵。
        <br />
        <br />
        有了救援者的幫助，愚者準備迎向未知的考驗。坎伯將此階段稱為跨越第一道門檻，英雄要跨出限制自己的生活世界，踏入更大的未知領域。這道門檻由戰車（The
        Chariot）展現牌中的人物離開城堡，駕馭著神獸史賓克斯，展示了愚者邁向門檻的意志與決心。跨越這道門檻後，愚者面對的是更多的試煉和挑戰。
      </template>
    </CardGalleryAll>
    <CardGalleryAll>
      <template #title>啟蒙</template>
      <template #description>
        首先，力量（Strength）中的少女微彎身體向著獅子，象徵人與神性結合後展現的力量。偉特解釋，少女與獅的間的花圈象徵繪帝的律法，連結人與神的鏈條。少女向獅的退讓，象徵承認脆弱能喚起內在勇氣，是自我與本能的對話與覺察過程。隨後的隱士（The
        Hermit），代表智慧老者的形象，象徵退讓與智慧，成為愚者在歷練中需要習得的特質，像是英雄的護身符，幫助他補強不足，轉化危機。
        <br />
        <br />
        接著，愚者踏入命運之輪（Wheel of
        Fortune），命運之輪圖像以圓輪為中心，圓輪周圍的神獸帶動繪下轉動，守護四方的是基督教的四活物。這張牌展現了超出人可知範圍的命運，象徵英雄的決定牽動命運之輪，雖無法洞察，但不可抗拒。隨後愚者面對的是正義（Justice），雖以正義女神為形象，但她不再遮住眼睛，反而遮蔽背景，象徵不公開、無法看到的面向，揭示愚者對真理的誤認。
        <br />
        <br />
        接下來的倒吊人（The Hanged
        Man），愚者在內外矛盾後，決定採取殉道者的態度，堅持信念，抵抗外力，成為群體中的他者，不再與群體為伍。但這也帶來逼近死亡的深淵，成為愚者最大的危機。走入倒吊人的態度後，愚者必須面對死亡考驗，死神（Death）描繪了走向更高精神的神秘死亡。圖像中的四個人物分別展現面對死亡的抗拒、歷情、逃避和放棄，但圖像彼岸的太陽升起，象徵永生。死神之後的節制（Temperance），以天使形象象徵精神世界，手拿聖杯，水在聖杯中流動，象徵走過死神後的新生命。
      </template>
    </CardGalleryAll>
    <CardGalleryAll direction="reverse">
      <template #title>回歸</template>
      <template #description>
        惡魔（The
        Devil）呈現黑暗與不安的氛圍，描繪了被惡魔控制的男女，他們受鎖鏈束縛，成為惡魔的奴隸。這代表著對世俗誘惑和黑暗力量的控制，以及對個體成長的阻礙。高塔（The
        Tower）則被比喻為虛假生命，其毀壞象徵 著破除虛假，讓靈性之光得以閃現，幫助個體找到回家的路。
        <br />
        <br />
        星星（The
        Star）以裸身女性形象呈現寧靜和安祥的氛圍，女性象徵永恆之美和青春，她手中倒出的生命之水象徵著心靈的禮物，而星星的光則代表內在的神聖之光，為旅者指引回歸的路。月亮（The
        Moon）則展現了愚者在脫逃過程中所面臨的困難和迷失，但月亮的引導力量協助愚者克服黑暗迷惑，指引他走向光明的道路。太陽（The
        Sun）則象徵著新生命的誕生，愚者在此獲得重新的可能性，完成歷程中的轉化。
        <br />
        <br />
        最後，在審判（
        Judgement）中，天使的號角喚醒了亡者，代表著群體對神聖召喚的回應，愚者在世界(The
        World)完成轉化旅程，重新融入群體。
      </template>
    </CardGalleryAll>
  </div>
  <div class="footer">
    <div class="footer-content">
      <p>© 2025 Tarot Exhibition. All rights reserved.</p>
      <p>Designed by Ya-Hui Chang</p>
    </div>
    <!-- <div class="footer-links">
      <a href="#">Privacy Policy</a>
      <a href="#">Terms of Service</a>
      <a href="#">Contact Us</a>
    </div> -->
  </div>
</template>

<script setup lang="ts">
import NavBar from '@/components/NavBar.vue'
import CardDisplay from '@/components/CardDisplay.vue'
import CardGalleryAll from '@/components/MajorPanel.vue'
</script>

<style scoped>
/* .nav-bar {
  position: fixed;
  width: 100%;
  z-index: 10;
} */

.main {
  width: 100%;
  max-width: 100%;
  /* height: 100%; */
  display: flex;
  flex-direction: column;
  gap: 3rem;
}

.footer {
  background-color: #333;
  color: white;
  padding: 20px;
  text-align: center;
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
