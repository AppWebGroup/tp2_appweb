<script setup lang="ts">
import Loading from 'vue-loading-overlay'
import { useToast } from 'vue-toast-notification'
import { onMounted, ref } from 'vue'
import { gameService } from '../services/gameService'
import type Ship from '../scripts/ship'
import router from '@/router'


const playerName = ref('');
const shipName = ref('');
const listOfShips = ref<Ship[]>();
const isLoading = ref(false)

//onMounted est utilisée pour exécuter du code spécifiquement après que le composant a été monté dans le DOM (Document Object Model).
onMounted(async () => {
  isLoading.value = true
  // Récupération de la liste de tous les vaisseaux spatiaux.
  await gameService.fetchShips().then(input => {listOfShips.value = input })
  .catch(err => useToast().error( `Erreur avec le service: ${(err as Error).message}. Est-ce que vous avez démarré le backend localement ?`,{ duration: 6000 })) 
  .finally( () => { isLoading.value = false , shipName.value = listOfShips.value![0].name; })

})

function handleFormSubmission() {
  if(playerName.value &&  shipName.value) {
     router.push({name: 'Mission', params: { playerName: playerName.value , shipName: shipName.value}})
  }
  else {
      useToast().warning(`Veuillez remplir les champs du formulaire`)
  }
}

</script>
<template>
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
              <option v-for="ship in listOfShips" :value="ship.name">{{ ship.name }}</option>
            </select>
          </div>
          <button class="btn btn-primary" @click="handleFormSubmission">Débuter la partie</button>
        </div>
      </div>
    </div>
  </div>
  <Loading :active="isLoading"/>
</template>
<style></style>