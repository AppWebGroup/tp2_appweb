import type Ship from "./ship";

export default interface Character {
    name: string;
    experience: string,
    experienceChances: number,
    credits: number,
    ship: Ship,
    remainingLife: number,
    isKilled: boolean
}  