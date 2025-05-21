<template>
  <div class="panel-container">
    <div class="panel-card">
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
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.panel-container {
  display: flex;
  justify-content: space-around;
  align-items: center;
  min-height: 100vh;
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
</style>
