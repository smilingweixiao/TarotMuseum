<template>
  <div class="display-container">
    <Stepper :value="curStep" class="basis-[80%]">
      <StepList class="display-header">
        <Step value="1">愚者</Step>
        <Step value="2">顯意識：身</Step>
        <Step value="3">淺意識：心</Step>
        <Step value="4">超意識：靈</Step>
      </StepList>
      <StepPanels>
        <StepPanel value="1">
          <div class="display-description">
            <div class="font-medium">等待著冒險的召喚，期待邁向更大的世界...</div>
          </div>
        </StepPanel>
        <StepPanel value="2">
          <div class="display-description">
            <div class="font-medium">進入世俗，開始經歷與他人關係...</div>
          </div>
        </StepPanel>
        <StepPanel value="3">
          <div class="display-description">
            <div class="font-medium">朝向內省，最後習得中庸之道...</div>
          </div>
        </StepPanel>
        <StepPanel value="4">
          <div class="display-description">
            <div class="font-medium">看破物質幻象，獲得全方面身心靈整合...</div>
          </div>
        </StepPanel>
      </StepPanels>

      <div class="display-body">
        <div class="font-medium">
          <CardGallery :activateCallback="activateCallback" />
        </div>
      </div>
    </Stepper>
  </div>
</template>
<script setup lang="ts">
import Stepper from 'primevue/stepper'
import StepList from 'primevue/steplist'
import StepPanels from 'primevue/steppanels'
import StepPanel from 'primevue/steppanel'

import Step from 'primevue/step'

import CardGallery from '@/components/CardGallery.vue'
import { ref } from 'vue'

const curStep = ref<string>('1')
const activateCallback = (step: string) => {
  curStep.value = step
  // console.log('Current step:', curStep.value)
}
</script>

<style scoped>
.display-container {
  width: 100%;
  /* height: 100vh; */
  display: flex;
  justify-content: center;
}
.display-description {
  width: 100%;
  /* height: 100%; */
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  /* font-weight: bold; */
}
</style>
