<template>
  <div class="display-container">
    <Stepper value="1" class="basis-[70%]">
      <StepList class="display-header">
        <Step value="1">愚者</Step>
        <Step value="2">啟程</Step>
        <Step value="3">啟蒙</Step>
        <Step value="4">回歸</Step>
      </StepList>
      <StepPanels class="display-body">
        <StepPanel v-slot="{ activateCallback }" value="1">
          <div class="flex flex-col photo">
            <div class="flex-auto flex justify-center items-center font-medium">
              <CardGallery />
            </div>
          </div>
          <div class="flex justify-end photo-btn">
            <Button
              label="Next"
              icon="pi pi-arrow-right"
              iconPos="right"
              @click="activateCallback('2')"
            />
          </div>
        </StepPanel>
        <StepPanel v-slot="{ activateCallback }" value="2">
          <div class="flex flex-col">
            <div class="flex-auto flex justify-center items-center font-medium">
              <CardGallery />
            </div>
          </div>
          <div class="flex justify-between">
            <Button
              label="Back"
              severity="secondary"
              icon="pi pi-arrow-left"
              @click="activateCallback('1')"
            />
            <Button
              label="Next"
              icon="pi pi-arrow-right"
              iconPos="right"
              @click="activateCallback('3')"
            />
          </div>
        </StepPanel>
        <StepPanel v-slot="{ activateCallback }" value="3">
          <div class="flex flex-col">
            <div class="flex-auto flex justify-center items-center font-medium">
              <CardGallery />
            </div>
          </div>
          <div class="flex justify-between">
            <Button
              label="Back"
              severity="secondary"
              icon="pi pi-arrow-left"
              @click="activateCallback('2')"
            />
            <Button
              label="Next"
              icon="pi pi-arrow-right"
              iconPos="right"
              @click="activateCallback('4')"
            />
          </div>
        </StepPanel>
        <StepPanel v-slot="{ activateCallback }" value="4">
          <div class="flex flex-col">
            <div class="flex-auto flex justify-center items-center font-medium">
              <CardGallery />
            </div>
          </div>
          <div class="">
            <Button
              label="Back"
              severity="secondary"
              icon="pi pi-arrow-left"
              @click="activateCallback('3')"
            />
          </div>
        </StepPanel>
      </StepPanels>
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
</script>

<style scoped>
.display-container {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
}
.display-header {
  height: 15vh;
}
.display-body {
  height: 85vh;
  .photo {
    height: 80%;
  }
  .photo-btn {
    display: none;
    /* height: 20%; */
  }
}
</style>
