
import type Ship from '../scripts/game'



async function fetchShips(): Promise<Ship[]> {
  try {
      let response = await fetch("/api/ships");
      if (!response.ok) {
          throw new Error(`Impossible de lister les vaisseaux: ${response.statusText}`); 
      }
      return await response.json();
  } catch (error : any) {
      return Promise.reject(error.message);
  }   
}

//TODO: get Ranking with an id
async function getRankingById (id : string) {
}

export const gameService = {
  fetchShips,
  getRankingById,
}