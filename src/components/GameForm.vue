<script setup lang="ts">
import Loading from 'vue-loading-overlay'
import { useToast } from 'vue-toast-notification'
import { onMounted, ref } from 'vue'
import { gameService } from '../services/gameService'
import type Ship from '../scripts/game'

const listOfShips = ref<Ship[]>();


const isLoading = ref(false)

//onMounted est utilisée pour exécuter du code spécifiquement après que le composant a été monté dans le DOM (Document Object Model).
onMounted(async () => {
  isLoading.value = true

  // Cherche la liste de tous les vaisseaux spatiaux.
  await gameService.fetchShips().then(input => {listOfShips.value = input })

  .catch(err => useToast().error( `Erreur avec le service: ${(err as Error).message}. Est-ce que vous avez démarré le backend localement ?`,
                                  { duration: 6000 }
  )) 
  .finally( () =>
    isLoading.value = false
  )
})
</script>

<template>
<div class="row d-flex justify-content-center align-items-center">
  <div class="col-sm-6 ">
    <div class="card">
      <div class="card-body p-4 p-lg-5">
        <div class="form-outline mb-4">
            <label class="form-label" for="playerName">Votre nom:</label>
            <input type="text" id="playerName" class="form-control form-control-lg" />
        </div>
        <div class="form-outline mb-4">
            <label class="form-label card-tex" for="playerName">Votre vaisseau:</label>
            <select class="form-select" aria-label="Default select example">
                <option id="shipsList"  v-for="ship in listOfShips" :key=ship.id :value=ship v-bind:selected="ship.id === 0">{{ ship.name }}</option>
            </select>
        </div>
        <button class="btn btn-primary">Débuter la partie</button>
      </div>
    </div>
  </div>
</div>
<Loading :active="isLoading"/>
</template>
<style></style>