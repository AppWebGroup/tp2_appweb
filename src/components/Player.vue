<script setup lang="ts">
import {ref } from "vue"
import '../css/style.css';


const props = defineProps<{
    playerName: string,
    shipName: string
}>()

const galacticCredits = ref(0)
const experience = ref("Maître")
const remainingLife = ref(100)



</script>
<template>
    <div class="col-12 col-md-6">
        <div class=" card bg-dark  mt-4">
            <div class="bg-primary card-header">
                <p class="col-12 text-white">{{ props.playerName }}</p>
            </div>
            <div div class="card-body">
                <div class="row  mt-2">
                    <div class="col-12 text-white">{{ experience + " - " + galacticCredits + " CG"}}</div>
                    <div class="col-12 text-white text-center m-2">{{ props.shipName}}</div>

                    <div class="col-12 progress bg-primary" style="height: 20px;">
                        <div class="progress-bar" role="progressbar" :style="{width: remainingLife + '%'}" aria-valuenow="remainingLife" aria-valuemin="0" aria-valuemax="100">{{ remainingLife+ " " + "%" }}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>