<script setup lang="ts">
import {experience} from '../scripts/experience'
import '../css/style.css';
import type Enemy from '@/scripts/enemy'


const props = defineProps<{
    enemy : Enemy | undefined
}>();


</script>
<template>
    <div class=" col-12 col-md-6">
        <div class="card bg-dark mt-4" v-if="props.enemy">
            <div class="bg-primary card-header">
                <p class="col-12 text-white">{{ props.enemy.name }}</p>
            </div>
            <div class="card-body">
                <div class="row mt-2">
                    <div class="col-12 text-white">{{ experience[props.enemy!.experience] + " - " + props.enemy!.credit + " CG"}}</div>
                    <div class="col-12 text-white text-center m-2">{{ props.enemy!.ship.name }}</div>
                    <div class="col-12 progress" style="height: 30px; padding: 0;">
                        <div class="progress-bar" role="progressbar"
                            :class="{ 'bg-danger': props.enemy!.remainingLives! < 25 }"
                            :style="{ width: props.enemy.remainingLives + '%' }"
                            aria-valuenow="props.enemy.remainingLives"
                            aria-valuemin="0"
                            aria-valuemax="100">
                            {{ props.enemy.remainingLives + '%' }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div v-else>
            <p>Loading enemy...</p>
        </div>
    </div>
</template>