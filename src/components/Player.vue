<script setup lang="ts">
import {experience} from '@/scripts/experience'
import '../css/style.css';
import type Player from "@/scripts/player";



const props = defineProps<{
    player : Player | undefined
}>()


</script>
<template>
    <div class="col-12 col-md-6">
        <div class=" card bg-dark  mt-4" v-if="props.player">
            <div class="bg-primary card-header">
                <p class="col-12 text-white" name="playerName">{{ props.player!.name}}</p>
            </div>
            <div div class="card-body">
                <div class="row  mt-2">
                    <div class="col-12 text-white" name="playerExperience">{{ experience[props.player!.experience] + " - " + props.player!.credit + " CG"}}</div>
                    <div class="col-12 text-white text-center m-2" name="playerShip">{{ props.player!.ship}}</div>
                    <div class="col-12 progress" style="height: 30px; padding: 0;">
                        <div class="progress-bar" role="progressbar"
                            :class="{ 'bg-danger': props.player!.remainingLives! < 25 }"
                            :style="{width: props.player!.remainingLives + '%'}"
                            aria-valuenow="props.player.remainingLives"
                            aria-valuemin="0"
                            aria-valuemax="100">
                            {{ props.player!.remainingLives + '%' }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div v-else>
            <p name="undefinedPlayer">player is not defined...</p>
        </div>
    </div>
</template>