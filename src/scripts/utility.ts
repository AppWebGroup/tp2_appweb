



function generateRandomNumber(minNumber: number, maxNumber:number ): number
{
    //console.log(maxNumber)
    //console.log(minNumber)
   const randomNumber:number = Math.floor(Math.random() * maxNumber - minNumber + 1) + minNumber;
   return randomNumber
}

//Retourne le pourcentage de vie à perdre
//entre 3 et 6 inclus
function getLostLifePercentage(): number
{
    const minimumPtLost : number = 3
    const maxPtLost:number = 6
    const lostPercentage:number = generateRandomNumber(minimumPtLost, maxPtLost)
    //console.log(lostPercentage)
    return lostPercentage
}

//À enlever si la destruction de l'ennemi marche

function ok(wtv: number)
{
    console.log(wtv)
}


//Fonction de calculs 
export const utility =
{
    generateRandomNumber,
    getLostLifePercentage,
    ok
}
