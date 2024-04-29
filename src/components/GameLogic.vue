<script setup lang="ts">
import {ref,  onBeforeMount} from 'vue'
import { scoresService } from '@/services/scoresService'
import type Enemy from '@/scripts/enemy'
import Logic from '../components/Logic.vue'
import type Player from '@/scripts/player'
import Loading from 'vue-loading-overlay'


//Initialisation
const DEFAULT_NUMBER_OF_ENEMY = 5;
const enemyList = ref<Enemy[]>([])
const props = defineProps<{
    isGameStarted : boolean,
    playerName: string,
    shipName: string,
    enemyList : Enemy[],
}>()

const emits = defineEmits<{
    (event: 'GameFinished') : void,
}>()

const isLoading = ref(true)
const currentEnemy = ref<Enemy>()

const currentPlayer = ref<Player | undefined>({ 
    name: props.playerName,
    experience: 4,
    credit: 0,
    ship: props.shipName,
    remainingLives: 100,
    isKilled :false
})

//initialize the enemy list before the game start
onBeforeMount(async () => {
    isLoading.value = true
    
    //Get the enemies to battle
    await scoresService.getACertainNumberOfEnemy(DEFAULT_NUMBER_OF_ENEMY).then( characters => {
        
        for(const character of characters!) {
             enemyList.value?.push({...character, isKilled:false, remainingLives:100} as Enemy)
        }
        console.error(enemyList.value)
        }
        
    ).then(() => chooseNewEnemy())
    .finally( () =>  
         isLoading.value = false)
    }
)


function onWinPlayer()
{
    scoresService.createRanking(currentPlayer.value!.name, currentPlayer.value!.credit)
    emits("GameFinished")
}


function chooseNewEnemy()
{
    for(const enemy of enemyList.value!) {
        if(!enemy.isKilled) {
            currentEnemy.value = enemy;
        }
    }
}

function onFinishGame(): void
{
    emits("GameFinished")
}

</script>
<template>
    <Logic :isGameStarted="props.isGameStarted" :currentPlayer="currentPlayer" :currentEnemy="currentEnemy" @chooseNewEnemy="chooseNewEnemy" @onWinPlayer="onWinPlayer" @onFinishGame="onFinishGame"/>
    <Loading :active="isLoading" />
</template>