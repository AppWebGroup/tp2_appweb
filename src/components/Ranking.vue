<script setup lang="ts">
//import Loading from 'vue-loading-overlay'
import { useToast } from 'vue-toast-notification'
import { onMounted, ref } from 'vue'
import { scoresService } from '../services/scoresService'
import type Ranking from '../scripts/ranking'
import {utility } from '@/scripts/utility'
import { loadRouteLocation } from 'vue-router'

const rankingList = ref<Ranking[]>();
const galaticCredits = "CG"

const isLoading = ref(false)


//onMounted est utilisée pour exécuter du code spécifiquement après que le composant a été monté dans le DOM (Document Object Model).
onMounted(async () => {
  isLoading.value = true

  // Cherche la liste de tous les pointages.
  await scoresService.getRanking().then(input => {rankingList.value = input.slice().sort((a, b) => b.score - a.score) })


 .catch(err => useToast().error( `Erreur avec le service: ${(err as Error).message}. Est-ce que vous avez démarré le backend localement ?`,
                                  { duration: 6000 }
  )) 
  .finally( () =>
    isLoading.value = false
  )
})
</script>
<template>
    <Suspense>
    <template #default>
        <table class="table">
            <thead class="thead-dark">
                <tr>
                    <th scope="col" class="text-center align-middle">Pointage</th>
                </tr>
            </thead>
            <tbody>
                <tr  
                v-for="ranking of rankingList" 
                v-bind:key="ranking.id">
                    <td>
                        {{ ranking.name + " - " + ranking.score + " " + galaticCredits }}
                    </td>
                </tr>
            </tbody>
        </table>
    </template>
    <template #fallback>
        <span>Score loading...</span>
    </template>
    </Suspense>
</template>
