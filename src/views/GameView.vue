<script setup lang="ts">
import Action from '../components/Action.vue';
import { onBeforeRouteLeave, useRouter, type RouteRecordName } from 'vue-router';
import ConfirmModal from '../components/ConfirmModal.vue';
import { ref } from 'vue';
import 'vue-loading-overlay/dist/css/index.css'
import GameLogic from '@/components/GameLogic.vue';


//Initialisation variables
const playerName = ref("");
const shipName = ref("");
const triggerModal = ref(0)
const nextView = ref<RouteRecordName | null>()
const gameStarted = ref(true)
const router = useRouter()


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

<<<<<<< HEAD
//Récupération du nom de joueur et de son vaisseau
=======
>>>>>>> 0f62533253df1f465e34138d5747e6207abc7ecf
playerName.value  = router.currentRoute.value.params.playerName
shipName.value = router.currentRoute.value.params.shipName

</script>
<template>
    <GameLogic :playerName="playerName" :shipName="shipName" :isGameStarted="gameStarted"></GameLogic>
    <ConfirmModal
      @onModalConfirmed="cancelConfirmed"
      :trigger="triggerModal"
      title="Attention"
      body="Vos changements seront perdus. Voulez-vous vraiment quitter cette page ? "
      cancelButton="Non"
      confirmButton="Oui, quitter sans sauvergarder"
    />
</template>