<script setup lang="ts">
import { useToast } from 'vue-toast-notification'
import Loading from 'vue-loading-overlay'
import router from '@/router'
import {ref } from 'vue'
import type Ship from '../scripts/ship'

//Initialisation variables
const props = defineProps<{
    listOfShips : Ship[]
}>()

const playerName = ref('');
const shipName = ref('');


function handleFormSubmission()
{
    if(playerName.value &&  shipName.value ) {
     router.push({name: 'Mission', params: { playerName: playerName.value, shipName: shipName.value}})
  }
  else {
      useToast().warning(`Veuillez remplir les champs du formulaire`)
  }
}

</script>
<template>
    <div class="row d-flex justify-content-center align-items-center">
      <div class="col-sm-6">
        <div class="card">
          <div class="card-body p-4 p-lg-5">
            <div class="form-outline mb-4">
              <label class="form-label" for="playerName">Votre nom:</label>
              <input v-model="playerName" type="text" id="playerName" class="form-control form-control-lg" />
            </div>
            <div class="form-outline mb-4">
              <label class="form-label card-tex" for="shipSelection">Votre vaisseau:</label>
              <select v-model="shipName" class="form-select" id="shipSelection" aria-label="Ship selection" >
                <option v-for="ship in props.listOfShips" :value="ship.name">{{ ship.name }}</option>
              </select>
            </div>
            <button class="btn btn-primary" @click="handleFormSubmission">Débuter la partie</button>
          </div>
        </div>
      </div>
    </div>
  </template>