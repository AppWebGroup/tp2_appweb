<script setup lang="ts">
import Player from '../components/Player.vue'
import Mission from '../components/Mission.vue'
import Enemy from '../components/Enemy.vue'
import Action from '../components/Action.vue'
import {ref,  onBeforeMount} from 'vue'
import { useToast } from 'vue-toast-notification'
import { scoresService } from '@/services/scoresService'
import type Character from '@/scripts/character'
import type Ship from '@/scripts/ship'
import {utility } from '@/scripts/utility'
import {valueExperience} from '@/scripts/experience'
import router  from '@/router/routes'
import Ranking from '@/scripts/ranking'



const props = defineProps<{
    isGameStarted : boolean,
    playerName: string,
    shipName: string
}>()
const isLoading = ref(true)
const currentEnemy = ref<Character>(
    {
        remainingLife: 100
    }
)

//Initialisation
const currentPlayer = ref<Character | undefined>({ 
    name: props.playerName,
    experience: 4,
    credits: 0,
    ship: { name:props.shipName },
    remainingLife: 100,
    isKilled :false
})


const levelMission = ref(1)

onBeforeMount(async () => {
    isLoading.value = true

    // Recherche de l'enemy à combattre
    await scoresService.getRandomEnemy().then(result => {
        currentEnemy.value = result ,
        currentEnemy.value.credits = result.credit,
        currentEnemy.value.remainingLife = 100,
        currentEnemy.value.isKilled = false
    })
    .catch(err => useToast().error( `Erreur avec le service: ${(err as Error).message}. Est-ce que vous avez démarré le backend localement ?`,
                                  { duration: 6000 }
    )) 
    .finally( () =>
        isLoading.value = false
    )
    })


function startFight(): void
{
    //Vérifier si la partie n'est pas terminée(fonction isGameFinish)
    //On a besoin d'avoir deux objet un ennemi et un joueur pour accéder à leur propriétés)

    
    //On vérifie si le vaisseau a été touché
    if(currentPlayer.value.isKilled == false && currentEnemy.value.isKilled == false)
    {
        onFight(currentPlayer.value, currentEnemy.value)
        onFight(currentEnemy.value, currentPlayer.value)
    }
    else if(currentPlayer.value.isKilled)
    {
       onKillPlayer()
       
    }
    else if(currentEnemy.value.isKilled)
    {   
        onKillEnemy()
        //Pour tester le onKillPlayer
        //onKillPlayer()
    }
    
}

function onFight(attacker:Character, victim: Character)
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
        //redirection vers la page de pointages
        //À arranger
        router.replace({name: 'Score'})
    }
    else if(currentEnemy.value.isKilled)
    {
        levelMission.value += 1 

        //Affichage du nouvel ennemi
        //À faire
        //chooseNewEnemy()
    }
}

function repairSpaceShip(): void
{

}

function onTouchShip(character:Character): void 
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
    currentPlayer.value.credits += currentEnemy.value.credits
    useToast().info(`Vous avez gagnez ${currentEnemy.value.credits} GC. Fécilcitations !`)
    finishMission()
}

function onKillPlayer(): void
{
   //message à l'utilisateur
    useToast().info(`Vous avez perdus. Vous n'avez pas complétez l'objectif des 5 missions.`)
   
   //Ne marche pas
   //Redirection vers la page d'acceuil
   router.replace({name: 'HomePage'})
}

function onWinPlayer()
{
    const newRanking = ref<Ranking>()

    //Ajouter le id dans character 
    //newRanking.value.id = 
    newRanking.value.name = currentPlayer.value.name
    newRanking.value.score = currentPlayer.value.credits
    scoresService.createRanking(newRanking)
}

function chooseNewEnemy()
{
    //À faire
    //choisir le nouvel enemy à combattre
    currentEnemy.value = scoresService.getRandomEnemyNotKilled(currentEnemy.value)

    utility.ok(currentEnemy)
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


</script>
<template>
 <div class="container">
      <div class="row">
        <Action @startFight="startFight" @finishMission="finishMission" @repairSpaceShip="repairSpaceShip"></Action>
        <Mission :levelMission="levelMission"/>
      </div>
      <div class="row">
        <Player :player="currentPlayer"/>
        <Enemy :enemy="currentEnemy"></Enemy>
      </div>
    </div>
</template>