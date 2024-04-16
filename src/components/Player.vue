<script setup lang="ts">
import {ref } from "vue"
import '../css/style.css';


const props = defineProps<{
    playerName: string,
    shipName: string
}>()

const galacticCredits: number = ref(0)
const experience: string = ref("Maître")
const remainingLife: number = ref(100)



</script>
<template>
    <div class="container">
        <div class="card bg-dark col-md-6">
            <div class="bg-primary card-header">
                <p class="col-12 text-white">{{ props.playerName }}</p>
            </div>
            <div div class="card-body">
                <div class="row  mt-2">
                    <div class="col-12 text-white">{{ experience + " - " + galacticCredits + " CG"}}</div>
                    <div class="col-12 text-white text-center m-2">{{ props.shipName}}</div>
                    <div class="col-12 btn btn-primary ">{{ remainingLife+ " " + "%" }}</div>
                </div>
            </div>
        </div>
    </div>
</template>