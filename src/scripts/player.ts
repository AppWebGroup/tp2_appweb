import type Character from './character';


export default interface Player extends Omit<Character, 'ship'>{
    credit: number,
    remainingLives?: number,
    ship: string,
    isKilled: false
}  