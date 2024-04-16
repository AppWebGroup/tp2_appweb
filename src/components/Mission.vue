<script setup lang="ts">
import {ref } from "vue"
import '../css/style.css';

const titleMission:string = "Mission en cours"
const props = defineProps<{
    levelMission: number 
}>()

const descriptionGame: string = "Objectif: survivre à 5 missions en obtenant le plus de crédits"

</script>
<template>
    <div class="container mt-4">
        <div class="card bg-dark col-md-6">
            <div class="bg-primary card-header">
                <p class="col-12 text-white">{{ titleMission}}</p>
            </div>
            <div div class="card-body">
                <div class="row  mt-2">
                    <div class="col-12 text-white">{{ props.levelMission + "/5"}}</div>
                    <div class="col-12 text-white text-center mt-2">{{ descriptionGame }}</div>
                </div>
            </div>
        </div>
    </div>
</template>