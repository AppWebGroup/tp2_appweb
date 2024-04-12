<script setup lang="ts">
import { useToast } from 'vue-toast-notification'
import { onMounted, ref } from 'vue'
import type Character from '../scripts/character'
import { scoresService } from '../services/scoresService'

//À changer
const player= ref<Character>();
const isLoading = ref(false)

player.value = scoresService.getPlayer()


const playerExperience = "Maître"
const playerCredits = 0
const shipName="X-Wing"


onMounted(async () => {
  isLoading.value = true

  // Cherche la liste de tous les pointages.
  await scoresService.getPlayer().then(character => {player.value = character })
  
 .catch(err => useToast().error( `Erreur avec le service: ${(err as Error).message}. Est-ce que vous avez démarré le backend localement ?`,
                                  { duration: 6000 }
  )) 
  .finally( () =>
    isLoading.value = false
  )
})


</script>
<template>
    <div class="container bg-dark">
        <div class="row bg-primary">
            <p class="col-12 text-white">{{ player.value.name }}</p>
        </div>
        <div class="row mt-2">
            <div class="col-12 text-white">{{ + " " +  + " CG"}}</div>
            <div class="col-12 text-white text-center mt-2">{{ shipName }}</div>
            <div class="col-12 btn btn-primary m-2">{{  }}</div>
        </div>
    </div>
</template>