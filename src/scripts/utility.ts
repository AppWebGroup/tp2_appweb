import type Character from "@/scripts/character";

function generateRandomNumber(minNumber: number, maxNumber:number ): number
{
    console.log(maxNumber)
    console.log(minNumber)
   const randomNumber:number = Math.floor(Math.random() * maxNumber - minNumber + 1) + minNumber;
   return randomNumber
}

function getLostLifePercentage(): number
{
    const minimumPtLost : number = 3
    const maxPtLost:number = 6
    const lostPercentage:number = generateRandomNumber(minimumPtLost, maxPtLost)
    console.log(lostPercentage)
    return lostPercentage
}

function ok(wtv : Character)
{
    console.log(wtv)
}

export const utility =
{
    generateRandomNumber,
    getLostLifePercentage,
    ok
}