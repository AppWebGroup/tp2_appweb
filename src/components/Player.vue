<script setup lang="ts">
import {ref} from "vue"
import type Character from "@/scripts/character";
import {experience, valueExperience} from '@/scripts/experience'
import '../css/style.css';


/*
const props = defineProps<{
    playerName: string,
    shipName: string
}>()*/

const props = defineProps<{
    player: Character
}>()


</script>
<template>
    <div class="col-12 col-md-6">
        <div class=" card bg-dark  mt-4">
            <div class="bg-primary card-header">
                <p class="col-12 text-white">{{ props.player.name}}</p>
            </div>
            <div div class="card-body">
                <div class="row  mt-2">
                    <div class="col-12 text-white">{{ experience[props.player.experience] + " - " + props.player.credits + " CG"}}</div>
                    <div class="col-12 text-white text-center m-2">{{ props.player.ship.name}}</div>
                    <div class="col-12 progress bg-primary" style="height: 30px;">
                        <div class="progress-bar" role="progressbar" :style="{width: props.player.remainingLife + '%'}" aria-valuenow="remainingLife" aria-valuemin="0" aria-valuemax="100">{{ props.player.remainingLife + " " + "%" }}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>