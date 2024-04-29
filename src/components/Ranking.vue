<script setup lang="ts">
import { useToast } from 'vue-toast-notification'
import { onMounted, ref } from 'vue'
import { scoresService } from '../services/scoresService'
import type Ranking from '../scripts/ranking'
import RankingTab from '../components/RankingTab.vue'


const rankingList = ref<Ranking[]>();
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
        <RankingTab :rankingList="rankingList" />
    </template>
    <template #fallback>
        <span>Score loading...</span>
    </template>
    </Suspense>
</template>
