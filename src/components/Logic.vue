<script setup lang="ts">
import {ref} from 'vue'
import { useToast } from 'vue-toast-notification'
import PlayerVue from '../components/Player.vue'
import Mission from '../components/Mission.vue'
import EnemyVue from '../components/Enemy.vue'
import Action from '../components/Action.vue'
import {utility } from '@/scripts/utility'
import {valueExperience} from '@/scripts/experience'
import type Enemy from '@/scripts/enemy'
import type Player from '@/scripts/player'
import { useRouter } from 'vue-router'

//Initialisation
const emit = defineEmits<{
    (event: 'onWinPlayer') : void,
    (event: 'onFinishGame') : void,
    (event: 'chooseNewEnemy') : void
}>()
const props = defineProps<{
    isGameStarted : boolean,
    currentPlayer: Player,
    currentEnemy: Enemy
}>()

const currentEnemy = ref<Enemy>()
const router = useRouter()
currentEnemy.value = props.currentEnemy
const DEFAULT_NUMBER_OF_ENEMY = 5;
const levelMission = ref(1)


function startFight(): void
{
    if(props.currentPlayer!.isKilled == false && props.currentEnemy!.isKilled == false)
    {
        onFight(props.currentPlayer!, props.currentEnemy!)
        onFight(props.currentEnemy!, props.currentPlayer!)
    }
    else if(props.currentPlayer!.isKilled)
    {
       onKillPlayer()  
    }
    else if(props.currentEnemy!.isKilled)
    {   
        onKillEnemy()
    }
    
}

function onFight(attacker: Player | Enemy, victim: Player | Enemy)
{
    //On vient chercher le pourcentage associé à l'expérience
    if (isShipTouch(valueExperience[attacker.experience]))
    {
        onTouchShip(victim)
    }
}


function finishMission(): void
{
    if(levelMission.value >= DEFAULT_NUMBER_OF_ENEMY)
    {
        //Rajout du joueur qui a gané dans le ranking
        emit("onWinPlayer")
        router.push({name: 'Score' });
    }
    levelMission.value += 1 
    props.currentEnemy!.isKilled = true;
    emit("chooseNewEnemy")
}

function repairSpaceShip(): void
{
    if(props.currentPlayer.credit >= 5 )
    {
        finishMission()
        const repairShipPercentage = utility.getRepairShipPercentage(props.currentPlayer.credit)
        props.currentPlayer.remainingLives += repairShipPercentage
        props.currentPlayer.credit = 0
    }
}

function onTouchShip(character: Player | Enemy): void 
{
    character.remainingLives! -= utility.getLostLifePercentage()
    if(character.remainingLives! <=0)
    {
        character.remainingLives = 0
        character.isKilled = true
    }
}

function onKillEnemy(): void
{
    props.currentPlayer!.credit += props.currentEnemy!.credit
    useToast().info(`Vous avez gagnez ${props.currentEnemy!.credit} GC. Fécilcitations !`)
    finishMission()
}


function onKillPlayer(): void
{
     //message à l'utilisateur
    emit("onFinishGame")
    useToast().info(`Vous avez perdus. Vous n'avez pas complétez l'objectif des 5 missions.`)
    router.push({name: 'HomePage'})
}


function isShipTouch(chancesInPercentage: number)
{

  const maxChances: number = chancesInPercentage/10
  const minNumber:number = 1
  const maxNumber:number = 10
  const randomNumber:number = utility.generateRandomNumber(minNumber, maxNumber);
  
  return utility.isShipReach(randomNumber, maxChances)
}

</script>
<template>
 <div class="container">
      <div class="row">
        <Action @startFight="startFight" @finishMission="finishMission" @repairSpaceShip="repairSpaceShip"></Action>
        <Mission :levelMission="levelMission"/>
      </div>
      <div class="row">
        <PlayerVue :player="props.currentPlayer"/>
        <EnemyVue :enemy="props.currentEnemy"></EnemyVue>
      </div>
 </div>
</template>