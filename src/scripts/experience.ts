interface Experience {
    [level: number]: string;
}

interface ValueExperience {
    [level: number]: number;
}


export const experience: Experience= 
{
    1:"Débutant",
    2:"Confirmé",
    3: "Expert",
    4:"Maître",
}

export const valueExperience : ValueExperience =
{
    1: 20,
    2: 35,
    3: 50,
    4: 70
}
