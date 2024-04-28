<script setup lang="ts">
import Loading from 'vue-loading-overlay'
import { useToast } from 'vue-toast-notification'
import { gameService } from '../services/gameService'
import { onMounted, ref } from 'vue';
import GameForm from '../components/GameForm.vue'
import 'vue-loading-overlay/dist/css/index.css'
import 'vue-toast-notification/dist/theme-sugar.css'
import type Ship from '@/scripts/ship';

//Initialisation variables
const gameObjectivesTitle = "Votre objectif"
const gameObjectives = "survivre à 5 missions en obtenant le plus de crédits galactiques"
const isLoading = ref(false)
const listOfShips = ref<Ship[]>([])

// initialisation de la liste des formulaires
onMounted(async () => {
  isLoading.value = true
  // Récupération de la liste de tous les vaisseaux spatiaux.
  await gameService.fetchShips().then(input => {listOfShips.value = input })
  .catch(err => useToast().error( `Erreur avec le service: ${(err as Error).message}. Est-ce que vous avez démarré le backend localement ?`,{ duration: 6000 })) 
  .finally( () => { isLoading.value = false})
})


</script>

<template>
  <Suspense>
    <div>
      <div>
        <span class="fs-3">{{ gameObjectivesTitle }} : </span>
        <span class="fs-6"> {{ gameObjectives }}</span>
    </div>
      <GameForm :list-of-ships="listOfShips"></GameForm>
    </div>
  </Suspense>
</template>