---
outline: deep
---

# Revue de code 1 de Aboue Abigail Helene Beke fait par Andry Ravelomanantsoa 

# TP2 Semaine 1 

**lien avec les services**
 
 L'utilisation de getPlayer() lors du commencement de la partie ne doit pas prendre le character dans la bd: 

```
  async function getPlayer()
  {
    const { data } = await axios.get(`${API_URL}/characters`)
    listCharacter.value = data
    const size:any = listCharacter.value?.length 
    const player = ref<Character>();

    player.value = listCharacter.value![size - 1]
    return player
  }
```

**principe des routes avec paramètres** 
Il faudrait prendre le joueur à partir des paramètres dans l'url où son nom est inscrit et le nom de son vaisseau.

Ce n'est pas a score service d'avoir la méthode getPlayer puisque ce devrait être gameService qui le ferait.
player.value = scoresService.getPlayer()


**Points forts** 
Dans l'ensemble le code est très bien lisible et facile à comprendre. L'utilisation de commentaires pour expliquer les codes est très utile.