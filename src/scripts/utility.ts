
function generateRandomNumber(minNumber: number, maxNumber:number ): number
{
   const randomNumber:number = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
   return randomNumber
}

//Retourne le pourcentage de vie à perdre
//entre 3 et 6 inclus
function getLostLifePercentage(): number
{
    const minimumPtLost : number = 3
    const maxPtLost:number = 6
    const lostPercentage:number = generateRandomNumber(minimumPtLost, maxPtLost)
    return lostPercentage
}

//Retourne le nombre de pourcentages de vies récupérer selon le nombr de crédits
function getRepairShipPercentage(nbCredits: number): number
{
    const nbCostGC: number = 5
    const repairShipPercentage = nbCredits/ nbCostGC

    return repairShipPercentage
}

//Vérifie si le vaisseau à été touché selon un nombre aléatoire
//et les chances qu'il soit touché
function isShipReach(randomNumber: number, maxChances: number) : boolean
{
    if(randomNumber <= maxChances)
    {
      return true
    }
    return false
}



//Fonction de calculs 
export const utility =
{
    generateRandomNumber,
    getLostLifePercentage,
    getRepairShipPercentage,
    isShipReach
}
