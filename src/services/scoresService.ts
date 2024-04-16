import axios from 'axios'
import {ref } from 'vue'
import type Ranking from '../scripts/ranking' 
import type Ship from '../scripts/ship' 
import type Character from '../scripts/character'

const API_URL = 'http://127.0.0.1:3000'

const listCharacter= ref<Character[]| undefined>();

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


  async function createRanking(ranking : Ranking)
  {
    const { data } = await axios.post(`${API_URL}/ranking`, ranking)
    return data
  }


  export const scoresService = {
    getShips,
    getRanking,
    createRanking, 
    getRandomEnemy 
  }




