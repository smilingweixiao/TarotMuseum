<template>
  <div class="display-container">
    <Stepper :value="curStep" class="basis-[60%]">
      <StepList class="display-header">
        <Step value="1">愚者</Step>
        <Step value="2">啟程</Step>
        <Step value="3">啟蒙</Step>
        <Step value="4">回歸</Step>
      </StepList>

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
import StepItem from 'primevue/stepitem'
import Step from 'primevue/step'
import StepPanel from 'primevue/steppanel'
import Button from 'primevue/button'
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
</style>
