
import type Ship from '../scripts/ship'


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


export const gameService = {
  fetchShips,
}