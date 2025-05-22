<template>
  <div class="panel-container">
    <!-- <div class="panel-card">
      <div class="panel-content"><div class="title">金幣</div></div>
    </div>
    <div class="panel-card">
      <div class="panel-content"><div class="title">聖杯</div></div>
    </div>
    <div class="panel-card">
      <div class="panel-content"><div class="title">寶劍</div></div>
    </div>
    <div class="panel-card">
      <div class="panel-content"><div class="title">權杖</div></div>
    </div> -->
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

<script setup lang="ts"></script>

<style scoped>
.panel-container {
  display: flex;
  justify-content: space-around;
  align-items: center;
  min-height: 80vh;
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
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
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
