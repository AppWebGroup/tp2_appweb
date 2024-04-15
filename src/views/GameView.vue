<script setup lang="ts">
import 'vue-loading-overlay/dist/css/index.css'
import 'vue-toast-notification/dist/theme-sugar.css'
//import Action from '../components/Action.vue'
import Player from '../components/Player.vue'

defineProps<{
    playerName: string,
    shipName: string
}>()

</script>
<template>
    <Player :playerName="playerName" :shipName="shipName"/>
</template>