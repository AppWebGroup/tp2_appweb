<script setup lang="ts">
import '../css/style.css';


const fightOption = "Combattre"
const missionOption ="Terminer la mission"
const restoreShipOption= "réparer le vaisseau"

//À changer le css + logique n'est pas encore fait
</script>
<template>
    <div class="container">
        <div class="row bg-primary">
            <p class="col-12 text-white">Actions</p>
        </div>
        <div class="row bg-dark" id="btn-actions">
            <div type="button" class="btn btn-primary col-4 m-2 btn-block">{{fightOption}}</div>
            <div type="button" class="btn btn-primary col-4 m-2 btn-block">{{ missionOption }}</div>
            <div type="button" class="btn btn-primary col-4 ml-2 mt-2 mb-2 btn-block">{{ missionOption +" et "+restoreShipOption }}</div>
        </div>
    </div>
</template>
