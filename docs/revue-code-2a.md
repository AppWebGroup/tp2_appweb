---
outline: deep
---

# Revue de code #2 de Aboue Abigail Helene Beke fait par Andry Ravelomanantsoa

# TP2 Semaine 2

**l'utilisation des services**

Le score service ne doit faire que des fonctions qui sont liées au service lui-même:

```
  async function getRandomEnemy()
  {
    const { data } = await axios.get(`${API_URL}/characters`)
    listCharacter.value = data
    const size: number = listCharacter.value!.length 
    const index = Math.floor(Math.random() * size);

    const enemy = ref<Character>();

    enemy.value = listCharacter.value![index]
    return enemy.value
  }
```

Dans ce cas, le getRandomEnemy ne devrait pas être dans scoresService mais plutot gameService
 

**évolution du code**

L'utilisation de Character comme étant le player et l'enemy alors qu'on peut les séprer dans chacune 
dans une catégorie ce qui facilite les changements lorsqu'on veut changer l'un ou l'autre selon les critères

**bonnes programmation**

L'utlisation des constantes doit être utilisé pour les toast: 

const PLAYER_LOSE_GAME_TOAST = Vous avez perdus. Vous n'avez pas complétez l'objectif des 5 missions.