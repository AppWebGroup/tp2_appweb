<script setup lang="ts">
import '../css/style.css';


const fightOption = "Combattre"
const missionOption ="Terminer la mission"
const restoreShipOption= "réparer le vaisseau"

const emit = defineEmits<{
    (event: 'startFight') : void,
    (event: 'stopMission') : void,
    (event: 'repairSpaceShip') : void
}>()


</script>
<template>
<div class="container mt-4">
    <div class="card bg-dark col-md-6">
        <div class="bg-primary card-header">
            <p class=" text-white">Actions</p>
        </div>
        <div class="card-body">
            <div class="row bg-dark d-flex justify-content-center">
                <div type="button" class="btn btn-primary col-3 m-2 btn-block justify-content-center" @click="emit('startFight')">{{fightOption}}</div>
                <div type="button" class="btn btn-primary col-3 m-2 btn-block justify-content-center" @click="emit('stopMission')">{{ missionOption }}</div>
                <div type="button" class="btn btn-primary col-3 m-2 btn-block justify-content-center" @click="emit('repairSpaceShip')">{{ missionOption +" et "+ restoreShipOption }}</div>
            </div>
        </div>
    </div>
</div>
</template>
