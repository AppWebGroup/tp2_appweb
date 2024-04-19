import axios from 'axios'
import {ref } from 'vue'
import type Ranking from '../scripts/ranking' 
import type Character from '../scripts/character'

const API_URL = 'http://127.0.0.1:3000'
const listCharacter= ref<Character[]| undefined>([]);

async function getShips () {
    const { data } = await axios.get(`${API_URL}/ships`)
    return data

  }

  async function getRanking () {
    const { data } = await axios.get(`${API_URL}/ranking`)
    return data
  }

  async function getRandomEnemy()
  {
    const { data } = await axios.get(`${API_URL}/characters`)
    listCharacter.value = data
    const size: number = listCharacter.value!.length 
    const index = Math.floor(Math.random() * size);

    const enemy = ref<Character>();

    enemy.value = listCharacter.value![index]
    return enemy.value
  }

  function getRandomEnemyNotKilled(characterToDelete: Character)
  {
    console.log(listCharacter.value?.length)
    console.log(characterToDelete.name)
    listCharacter.value = listCharacter.value!.filter(character => characterToDelete.name != character.name)
    console.log(listCharacter.value!.length)

    const randomEnemy = getRandomEnemy()
    console.log(randomEnemy)
    return randomEnemy

  }

  async function getACertainNumberOfEnemy(numberOfEnemyToGet:  number) : Promise<Character[] | undefined>
  {
     const listOfRandomPickedCharacter= ref<Character[]| undefined>([]);
     for(let i =0; i < numberOfEnemyToGet; i++) {
         await getRandomEnemy().then( character => listOfRandomPickedCharacter.value!.push(character))
     }
     return listOfRandomPickedCharacter.value
  }
  async function createRanking(ranking : Ranking)
  {
    const { data } = await axios.post(`${API_URL}/ranking`, ranking)
    return data
  }


  export const scoresService = {
    getShips,
    getRanking,
    createRanking, 
    getRandomEnemy,
    getACertainNumberOfEnemy
  }

  export async function transformCharacterToEnemy(character: Character): Promise<Enemy> {
    const enemy: Enemy = {
      ...character,
      isKilled: false,
      remainingLives: 3 // Assuming default remaining lives
    };
    return enemy;
  }

  function clearArray<T>(array: T[]) {
    while (array.length > 0) {
      array.pop();
    }
  }




