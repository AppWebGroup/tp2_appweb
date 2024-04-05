import axios from 'axios'
import type Ranking from '../scripts/ranking' 
import type Ship from '../scripts/ship' 


const API_URL = 'http://127.0.0.1:3000'


async function getShips () {
    const { data } = await axios.get(`${API_URL}/ships`)
    return data

    
  }

  async function getRanking () {
    const { data } = await axios.get(`${API_URL}/ranking`)
    return data
  }

  async function createRanking(ranking : Ranking)
  {
    const { data } = await axios.post(`${API_URL}/ranking`, ranking)
    return data
  }



