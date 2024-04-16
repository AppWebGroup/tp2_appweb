<script setup lang="ts">
import Player from '../components/Player.vue'
import Mission from '../components/Mission.vue'
import Enemy from '../components/Enemy.vue'
import Action from '../components/Action.vue'
import {ref,  onBeforeMount} from 'vue'
import { useToast } from 'vue-toast-notification'
import { scoresService } from '@/services/scoresService'
import type Character from '@/scripts/character'


defineProps<{
    isGameStarted : boolean,
    playerName: string,
    shipName: string
}>()
const isLoading = ref(true)
const currentEnemy = ref<Character | undefined>()

const levelMission = ref(1)

onBeforeMount(async () => {
    isLoading.value = true

    // Recherche de l'enemy à combattre
    await scoresService.getRandomEnemy().then(result => {currentEnemy.value = result})
    .catch(err => useToast().error( `Erreur avec le service: ${(err as Error).message}. Est-ce que vous avez démarré le backend localement ?`,
                                  { duration: 6000 }
    )) 
    .finally( () =>
        isLoading.value = false
    )
    })
</script>
<template>
 <div class="container">
      <div class="row">
        <Action ></Action>
        <Mission :levelMission="levelMission"/>
      </div>
      <div class="row">
        <Player :playerName="playerName" :shipName="shipName"/>
        <Enemy :enemy=currentEnemy></Enemy>
      </div>
    </div>
</template>