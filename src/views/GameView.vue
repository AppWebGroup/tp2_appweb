<script setup lang="ts">
import Action from '../components/Action.vue';
import { onBeforeRouteLeave, useRouter, type RouteRecordName } from 'vue-router';
import { gameService } from '@/services/gameService';
import ConfirmModal from '../components/ConfirmModal.vue';
import { ref } from 'vue';
import 'vue-loading-overlay/dist/css/index.css'
//import Action from '../components/Action.vue'
import Player from '../components/Player.vue'
import Mission from '../components/Mission.vue'
import Enemy from '../components/Enemy.vue'
import { useLink } from 'vue-router';



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
  //

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
    <Player  :playerName="playerName" :shipName="shipName"/>
    <Mission :levelMission="levelMission"/>
    <Action ></Action>
    <ConfirmModal
      @onModalConfirmed="cancelConfirmed"
      :trigger="triggerModal"
      title="Attention"
      body="Vos changements seront perdus. Voulez-vous vraiment quitter cette page ? "
      cancelButton="Non"
      confirmButton="Oui, quitter sans sauvergarder"
    />
</template>