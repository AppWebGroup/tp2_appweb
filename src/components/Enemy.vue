<script setup lang="ts">
import {ref, onMounted } from "vue"
import { useToast } from 'vue-toast-notification'
import {scoresService} from '../services/scoresService'
import type Character from '../scripts/character'
import {experience} from '../scripts/experience'
import '../css/style.css';


const isLoading = ref(false)
const enemy = ref<Character>();
const remainingLife: number = ref(100)

//onMounted est utilisée pour exécuter du code spécifiquement après que le composant a été monté dans le DOM (Document Object Model).
onMounted(async () => {
  isLoading.value = true

  // Recherche de l'enemy à combattre
   await scoresService.getRandomEnemy().then(result => {
  enemy.value = result})

                //not sure
 .catch(err => useToast().error( `Erreur avec le service: ${(err as Error).message}. Est-ce que vous avez démarré le backend localement ?`,
                                  { duration: 6000 }
  )) 
  .finally( () =>
    isLoading.value = false
  )
})

</script>
<template>
    <div class="container mt-4">
        <div class="card bg-dark col-md-6">
            <div class="bg-primary card-header">
                <p class="col-12 text-white">{{enemy.value.name}}</p>
            </div>
            <div div class="card-body">
                <div class="row  mt-2">
                    <div class="col-12 text-white">{{ experience[enemy.value.experience]  + " - " + enemy.value.credit + " CG"}}</div>
                    <div class="col-12 text-white text-center mt-2">{{ }}</div>
                    <div class="col-12 btn btn-primary ">{{ remainingLife + " " + "%" }}</div>
                </div>
            </div>
        </div>
    </div>
</template>