import type Character from './character';


export default interface Player extends Omit<Character, 'ship'>{
    remainingLives?: number,
    ship: string,
}  