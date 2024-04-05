<script setup lang="ts">
import GameForm from '../components/GameForm.vue'
import 'vue-loading-overlay/dist/css/index.css'
import 'vue-toast-notification/dist/theme-sugar.css'

const gameObjectivesTitle = "Votre objectif"
const gameObjectives = "survivre à 5 missions en obtenant le plus de crédits galactiques"

</script>

<!-- Ce composant est associé à la route "/". Il affiche la liste des publications de l'utilisateur. Lorsque l'utilisateur clique sur l'un des liens "Éditer" associés à une publication, il est redirigé vers la route "/posts/:id" (voir fichier src/router/routes.js). -->
<template>
  <div>
    <div>
      <span class="fs-3">{{ gameObjectivesTitle }} : </span>
      <span class="fs-6"> {{ gameObjectives }}</span>
    </div>
    <GameForm></GameForm>

  </div>
</template>
../services/Service../scripts/game