<script setup lang="ts">
import Loading from 'vue-loading-overlay'
import {ref, onMounted } from "vue"
import { useToast } from 'vue-toast-notification'
import {scoresService} from '../services/scoresService'
import type Character from '../scripts/character'
import {experience} from '../scripts/experience'
import '../css/style.css';


const isLoading = ref(false)
const enemy = ref<Character>();
const remainingLife = ref(100)

onMounted(async () => {
    isLoading.value = true

    // Recherche de l'enemy à combattre
    await scoresService.getRandomEnemy().then(result => {enemy.value = result})
    .catch(err => useToast().error( `Erreur avec le service: ${(err as Error).message}. Est-ce que vous avez démarré le backend localement ?`,
                                  { duration: 6000 }
    )) 
    .finally( () =>
        isLoading.value = false
    )
    })

</script>
<template>
    <div class=" col-12 col-md-6">
        <div class="card bg-dark mt-4" v-if="enemy">
            <div class="bg-primary card-header">
                <p class="col-12 text-white">{{ enemy.name }}</p>
            </div>
            <div class="card-body">
                <div class="row mt-2">
                    <div class="col-12 text-white">{{ experience[enemy.experience ?? 1] + " - " + enemy.credit + " CG"}}</div>
                    <div class="col-12 text-white text-center m-2">{{ enemy.ship.name }}</div>
                    <div class="col-12 progress bg-primary" style="height: 20px;">
                        <div class="progress-bar" role="progressbar" :style="{width: remainingLife + '%'}" aria-valuenow="remainingLife" aria-valuemin="0" aria-valuemax="100">{{ remainingLife+ " " + "%" }}</div>
                    </div>
                </div>
            </div>
        </div>
        <div v-else>
            <p>Loading enemy...</p>
        </div>
    </div>
    <Loading :active="isLoading"/>
</template>