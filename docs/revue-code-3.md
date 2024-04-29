---
outline: deep
---

# Revue de Code TP2 semaine 3

## Code

**Lisibité du code**

Le code est facile à lire, car les variables correspondent bien à leurs actions
et les tâches qu'elles auront à effectuer.

```
function onTouchShip(character: Player | Enemy): void
{
    character.remainingLives! -= utility.getLostLifePercentage()
    if(character.remainingLives! <=0)
    {
        character.remainingLives = 0
        character.isKilled = true
    }
}

```

**Conformité du code aux bonnes pratiques de programmation**

Pour la conformité aux bonnes pratiques de programmation, le code est propre.
Les fonctions ont tous des noms significatifs propres à leurs actions.

Il n'y aucun commentaires inutiles, tous les commentaires présents
sont là pour une meilleure compréhension du code.

```
// initialize an enemy list
const enemyList = ref<Enemy[]>([])

```

```
//initialize the enemy list before the game start
onBeforeMount(async () => {
    isLoading.value = true

    //Get the enemies to battle
    await scoresService.getACertainNumberOfEnemy(DEFAULT_NUMBER_OF_ENEMY).then( characters => {

        for(const character of characters!) {
             enemyList.value?.push({...character, isKilled:false, remainingLives:100} as Enemy)
        }
        console.error(enemyList.value)
        }

    ).then(() => currentEnemy.value = chooseNewEnemy())
    .finally( () =>
         isLoading.value = false)
    }
)

```

## Points forts

**Communication**

La communication d'équipe était présente, malgré le problème de disponibilité.

**Respect des délais**

Chaque coéquipier n'a pas respecté son délais. En effet, la semaine était assez chargée, donc il
était difficile d'avancer le travail.

**Travail propre**

Le code est constitué de fonctions concises.
Donc, lorsqu'il y a un bug, il y avait plus de facilité à le corriger puisque le code est facile à comprendre.
En effet, on a eu un bug dans le cours de mardi, même si on a pas pu le régler, il nous été facile de détecter
la source de ce problème.

## Améliorations

**Suggestions d'amélioration pour les prochaines semaines**

Pour le prochain travail pratique, je suggérerais d'implémenter les tests en même temps
que l'implémentation des fonctionnalités. Le fait d'avoir implémenter la logique avant les tests
n'assure pas vraiment la sûreté des fonctionnalités. De plus, je remarque qu'il est plus diffcile
de savoir quels tests on doit implémenter pour chaque fonctionnalité, lorsque tout est terminé.
