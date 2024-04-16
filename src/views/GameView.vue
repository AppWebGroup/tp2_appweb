<script setup lang="ts">
import Action from '../components/Action.vue';
import { onBeforeRouteLeave, useRouter, type RouteRecordName } from 'vue-router';
import { gameService } from '@/services/gameService';
import ConfirmModal from '../components/ConfirmModal.vue';
import { ref } from 'vue';
import 'vue-loading-overlay/dist/css/index.css'
//import Action from '../components/Action.vue'
import Player from '../components/Player.vue'

defineProps<{
    playerName: string,
    shipName: string
}>()

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


</script>
<template>
    <Player :playerName="playerName" :shipName="shipName"/>
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