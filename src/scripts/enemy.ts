import type Character from "./character";


export default interface Enemy extends Character {
    remainingLives?: number,
    isKilled: boolean
}
