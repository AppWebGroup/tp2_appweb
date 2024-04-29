<script setup lang="ts">
import { useToast } from 'vue-toast-notification'
import Loading from 'vue-loading-overlay'
import {  onMounted, ref, watch } from 'vue'
import type Ship from '../scripts/ship'
import router from '@/router'


const props = defineProps<{
  listOfShips : Ship[]
}>();

const playerName = ref('');
const shipName = ref('');

<<<<<<< HEAD
=======

>>>>>>> final-project
function handleFormSubmission() {
  if(playerName.value &&  shipName.value) {
     router.push({name: 'Mission', params: { playerName: playerName.value , shipName: shipName.value}})
  }
  else {
      useToast().warning(`Veuillez remplir les champs du formulaire`)
  }
}

watch(() => props.listOfShips, (newValue, oldValue) => {
  if (newValue.length > 0) {
    shipName.value = newValue[0].name;
  }
});

</script>
<template>
  <Suspense>
  <div class="row d-flex justify-content-center align-items-center">
    <div class="col-sm-6">
      <div class="card">
        <div class="card-body p-4 p-lg-5">
          <div class="form-outline mb-4">
            <label class="form-label" for="playerName">Votre nom:</label>
            <input v-model="playerName" type="text" id="playerName" class="form-control form-control-lg" />
          </div>
          <div class="form-outline mb-4">
            <label class="form-label card-tex" for="shipSelection">Votre vaisseau:</label>
            <select v-model="shipName" class="form-select" id="shipSelection" aria-label="Ship selection" >
              <option v-if="listOfShips.length > 0" v-for="(ship, index) in listOfShips" :value="ship.name" :key="index">{{ ship.name }}</option>
              <option v-if="listOfShips.length === 0" selected disabled>Aucun vaisseau disponible</option>
            </select>
          </div>
          <button class="btn btn-primary" @click="handleFormSubmission">Débuter la partie</button>
        </div>
      </div>
    </div>
  </div>
  </Suspense>
</template>
<style></style>