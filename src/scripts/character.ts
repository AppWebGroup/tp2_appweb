import type Ship from "./ship";

export default interface Character {
    readonly name: string;
    readonly experience: number,
    readonly credit: number,
    readonly ship: Ship
} 

