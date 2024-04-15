<script setup lang="ts">
import type Character from '../scripts/character'
import { scoresService } from '../services/scoresService'


defineProps<{
    playerName: string,
    shipName: string
}>()

//À utiliser
/*const playerExperience = "Maître"
const playerCredits = 0*/


</script>
<template>
    <div class="container bg-dark">
        <div class="row bg-primary">
            <p class="col-12 text-white">{{ props.playerName }}</p>
        </div>
        <div class="row mt-2">
            <div class="col-12 text-white">{{ }}</div>
            <div class="col-12 text-white text-center mt-2">{{ props.shipName }}</div>
            <div class="col-12 btn btn-primary m-2">{{  }}</div>
        </div>
    </div>
</template>