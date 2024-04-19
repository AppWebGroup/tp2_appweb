<script setup lang="ts">
import Loading from 'vue-loading-overlay'
import {ref} from "vue"
import type Character from '../scripts/character'
import {experience} from '../scripts/experience'
import '../css/style.css';

//Initialisation
const props = defineProps<{
    enemy : Character
}>();

const isLoading = ref(false)


</script>
<template>
    <div class=" col-12 col-md-6">
        <div class="card bg-dark mt-4" v-if="props.enemy">
            <div class="bg-primary card-header">
                <p class="col-12 text-white">{{ props.enemy.name }}</p>
            </div>
            <div class="card-body">
                <div class="row mt-2">
                    <div class="col-12 text-white">{{ experience[props.enemy.experience] + " - " + props.enemy.credits + " CG"}}</div>
                    <div class="col-12 text-white text-center m-2">{{ enemy.ship.name }}</div>
                    <div class="col-12 progress bg-primary" style="height: 30px;">
                        <div class="progress-bar" role="progressbar" :style="{ width: props.enemy.remainingLife + '%'}" aria-valuenow="remainingLife" aria-valuemin="0" aria-valuemax="100">{{ props.enemy.remainingLife + " " + "%" }}</div>
                    </div>
                </div>
            </div>
        </div>
        <div v-else>
            <p>Loading enemy...</p>
        </div>
    </div>
    <Loading :active="isLoading"/>
</template>