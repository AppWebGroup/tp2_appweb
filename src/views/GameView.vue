<script setup lang="ts">
import Action from '../components/Action.vue';
import { onBeforeRouteLeave, useRouter, type RouteRecordName } from 'vue-router';
import { gameService } from '@/services/gameService';
import ConfirmModal from '../components/ConfirmModal.vue';
import { ref } from 'vue';
import 'vue-loading-overlay/dist/css/index.css'
import Player from '../components/Player.vue'
import Mission from '../components/Mission.vue'
import Enemy from '../components/Enemy.vue'



const triggerModal = ref(0)
const nextView = ref<RouteRecordName | null>()
const gameStarted = ref(true)
const router = useRouter()

const playerName = ref("");
const shipName = ref("");

const levelMission = ref(1)

onBeforeRouteLeave((to, from, next) => {
  if(gameStarted.value) {
    triggerModal.value++
    nextView.value = to.name
    next(false)
  } else {
    next()
  }
})

function cancelConfirmed() {
  gameStarted.value = false;
  router.push({ name: nextView.value!})
}

function startFight()
{
  //Vérifier si la partie n'est pas terminée(fonction isGameFinish)
  //On a besoin d'avoir deux objet un ennemi et un joueur pour accéder à leur propriétés)

  //On vérifie si le vaisseau a été touché

  //Si oui on fait un generate pour un minimum de % entre 3 et 6 % perdus
  //on diminue sur le remainingLife
}


function isShipTouch(chancesInPercentage: number)
{
  const chances: number = chancesInPercentage/10
  const randomNumber:number = generateRandomNumber();
  
  if(randomNumber<= chances)
  {
    return true
  }

  return false

}

//je ne pense pas que ce soit la bonne vue pour ca 
function generateRandomNumber(): number 
{
  const maxNumber:number = 10

  return Math.floor(Math.random() * maxNumber) + 1;
}


function stopMission()
{

}

function repairSpaceShip()
{

}

playerName.value  = router.currentRoute.value.params.playerName
shipName.value = router.currentRoute.value.params.shipName

</script>
<template>
    <div class="container">
      <div class="row">
        <Action ></Action>
        <Mission :levelMission="levelMission"/>
      </div>
      <div class="row">
        <Player  :playerName="playerName" :shipName="shipName"/>
        <Enemy></Enemy>
      </div>
    </div>
    <ConfirmModal
      @onModalConfirmed="cancelConfirmed"
      :trigger="triggerModal"
      title="Attention"
      body="Vos changements seront perdus. Voulez-vous vraiment quitter cette page ? "
      cancelButton="Non"
      confirmButton="Oui, quitter sans sauvergarder"
    />
</template>