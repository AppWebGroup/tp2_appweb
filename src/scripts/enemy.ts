import type Character from "./character";


export default interface Enemy extends Character {
    remainingLives?: number,
    iskilled: boolean
}
