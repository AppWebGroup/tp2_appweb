---
outline: deep
---

# Revue de Code TP2 semaine 1

## Code

**Lisibité du code**

Le code est facile à lire, car il y a des commentaires placés pour
la description de la tâche de certaines parties du code.

```
// Cherche la liste de tous les vaisseaux spatiaux.
  await gameService.fetchShips().then(input => {listOfShips.value = input })

  .catch(err => useToast().error( `Erreur avec le service: ${(err as Error).message}. Est-ce que vous avez démarré le backend localement ?`,
                                  { duration: 6000 }
  ))
  .finally( () =>
    isLoading.value = false
  )

```

**Conformité du code aux bonnes pratiques de programmation**

Pour la conformité aux bonnes pratiques de programmation, le code est propre.
Les fonctions ont tous des noms significatifs propres à leurs actions.

Il n'y aucun commentaires inutiles, tous les commentaires présents
sont là pour une meilleure compréhension du code.

## Améliorations

**Suggestions d'amélioration pour les prochaines semaines**

La première suggestion que j'aurais à faire serait de nous bien séparer les tâches pour éviter de dupliquer le code ou entraver sur la
tâche de l'autre.
Par exemple, avec la création des routes.

La deuxième suggestion que j'aurais à faire serait d'essayer le plus possible de mettre notre code en commun le plus souvent pour éviter d'avoir de grosses erreurs dans le code.

La dernière suggestion que j'aurais à faire serait d'utiliser les mêmes manières de fonctionner par exemple, avec le gameService et le scoresService nous avons 2 manières différentes de procéder pour récupérer les données

Dans le gameService

```
async function fetchShips(): Promise<Ship[]> {
  try {
      let response = await fetch("/api/ships");
      if (!response.ok) {
          throw new Error(`Impossible de lister les vaisseaux: ${response.statusText}`);
      }
      return await response.json();
  } catch (error : any) {
      return Promise.reject(error.message);
  }
}

```

Dans le scoresService

```
async function getShips () {
    const { data } = await axios.get(`${API_URL}/ships`)
    return data

  }
```
