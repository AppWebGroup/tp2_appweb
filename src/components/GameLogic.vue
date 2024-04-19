<script setup lang="ts">
import PlayerVue from '../components/Player.vue'
import Mission from '../components/Mission.vue'
import EnemyVue from '../components/Enemy.vue'
import Action from '../components/Action.vue'
import {ref,  onBeforeMount} from 'vue'
import { useToast } from 'vue-toast-notification'
import { scoresService } from '@/services/scoresService'
import type Character from '@/scripts/character'
import type Ship from '@/scripts/ship'
import {utility } from '@/scripts/utility'
import {valueExperience} from '@/scripts/experience'
import type Ranking from '@/scripts/ranking'
import type Enemy from '@/scripts/enemy'
import type Player from '@/scripts/player'
import { useRouter } from 'vue-router'

const DEFAULT_NUMBER_OF_ENEMY = 5;
const router = useRouter()

// initialize an enemy list 
const enemyList = ref<Enemy[]>()

const props = defineProps<{
    isGameStarted : boolean,
    playerName: string,
    shipName: string
}>()
const isLoading = ref(true)
const currentEnemy = ref<Enemy>()

//Initialisation
const currentPlayer = ref<Player | undefined>({ 
    name: props.playerName,
    experience: 4,
    credits: 0,
    ship: props.shipName,
    remainingLife: 100,
    isKilled :false
})


const levelMission = ref(1)

//initialize the enemy list before the game start
onBeforeMount(async () => {
    isLoading.value = true
    
    //Get the enemies to battle
    await scoresService.getACertainNumberOfEnemy(DEFAULT_NUMBER_OF_ENEMY).then( characters => {
        for(const character of characters!) {
             enemyList.value?.push({...character, iskilled:false, remainingLives:100} as Enemy)
        }}
    )
    .finally( () =>  
        { isLoading.value = false
             }
        )
    }
)

if(enemyList) {
    chooseNewEnemy()
}



function startFight(): void
{
    //Vérifier si la partie n'est pas terminée(fonction isGameFinish)
    //On a besoin d'avoir deux objet un ennemi et un joueur pour accéder à leur propriétés)

    //On vérifie si le vaisseau a été touché
    if(currentPlayer.value!.isKilled == false && currentEnemy.value!.isKilled == false)
    {
        onFight(currentPlayer.value!, currentEnemy.value!)
        onFight(currentEnemy.value!, currentPlayer.value!)
    }
    else if(currentPlayer.value!.isKilled)
    {
       onKillPlayer()
       
    }
    else if(currentEnemy.value!.isKilled)
    {   
        onKillEnemy()
        //Pour tester le onKillPlayer
        //onKillPlayer()
    }
    
}

function onFight(attacker: Player | Enemy, victim: Player | Enemy)
{
    if (isShipTouch(valueExperience[attacker.experience]))
    {
        onTouchShip(victim)
    }
}

function finishMission(): void
{
    if(levelMission.value == 5)
    {
        router.push({name: 'Score'})
    }
    else if(currentEnemy.value!.isKilled)
    {
        levelMission.value += 1 
        chooseNewEnemy()
    }
}

function repairSpaceShip(): void
{

}

function onTouchShip(character: Player | Enemy): void 
{
    character.remainingLife -= utility.getLostLifePercentage()
    if(character.remainingLife <=0)
    {
        character.remainingLife = 0
        character.isKilled = true
    }
}

function onKillEnemy(): void
{
    currentPlayer.value!.credits += currentEnemy.value!.credits
    useToast().info(`Vous avez gagnez ${currentEnemy.value!.credits} GC. Fécilcitations !`)
    finishMission()
}

function onKillPlayer(): void
{
   //message à l'utilisateur
    useToast().info(`Vous avez perdus. Vous n'avez pas complétez l'objectif des 5 missions.`)
    router.push({name: 'HomePage'})
}

function onWinPlayer()
{
    const newRanking = ref<Ranking>()
    newRanking.value!.name = currentPlayer.value!.name
    newRanking.value!.score = currentPlayer.value!.credits.toString()
    scoresService.createRanking(newRanking.value!)
}

function chooseNewEnemy()
{
    for(const enemy of enemyList.value!) {
        if(!enemy.isKilled) {
            return enemy;
        }
    }
}

function isShipTouch(chancesInPercentage: number)
{
  const maxChances: number = chancesInPercentage/10
  const minNumber:number = 1
  const maxNumber:number = 10
  const randomNumber:number = utility.generateRandomNumber(minNumber, maxNumber);
  
  if(randomNumber <= maxChances)
  {
    return true
  }
  return false
}

function getARandomEnemy() {
     
}


</script>
<template>
 <div class="container">
      <div class="row">
        <Action @startFight="startFight" @finishMission="finishMission" @repairSpaceShip="repairSpaceShip"></Action>
        <Mission :levelMission="levelMission"/>
      </div>
      <div class="row">
        <PlayerVue :player="currentPlayer"/>
        <EnemyVue :enemy="currentEnemy"></EnemyVue>
      </div>
    </div>
</template>