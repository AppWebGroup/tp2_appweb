import { describe, afterEach, expect, vi, it } from 'vitest'
import { mount } from '@vue/test-utils'
import RankingTab from '../Ranking.vue'
import type Ranking from '@/scripts/ranking'


describe('RankingTab.vue', () => {
    it(`Doit afficher le tableau de pointages lorsque l'utilisateur 
    clique sur score dans la barre de navigation `, async () => {
    
      const rankingList : Ranking[] = [
        {
            "id": 1,
            "name": "Barbie",
            "score": "500"
          },
          {
            "id": 2,
            "name": "Beyonce",
            "score": "495"
          },
          {
            "id": 3,
            "name": "SZA",
            "score": "490"
          }
      ]
      const wrapper = mount(RankingTab, {
        props : {rankingList}

        })

     const rankingExpectList = wrapper.findAll('td').map(td => td.text())

     expect(rankingExpectList.length).toBe(3)
     expect(rankingExpectList[0]).toBe("Barbie - 500 CG")
     expect(rankingExpectList[1]).toBe("Beyonce - 495 CG")
     expect(rankingExpectList[2]).toBe("SZA - 490 CG")
     expect(wrapper.find('th').text()).toBe('Pointage')
     
    })
})

    describe('Ranking.vue', () => {
        it(`Doit afficher le tableau de pointages dans la route de scores`, async () => {
    
         //À faire


    
         
        })
    })

        
    describe('Ranking.vue', () => {
                it(`Doit afficher le tableau de score en fin de partie`, async () => {
            
                 //À faire
                //Le tableau n'est pas vide + présence du nouveau joueur
                 
         })
    })


         describe('Ranking.vue', () => {
            it(`Ne doit pas afficher le tableau de score si le composant n'est pas mount`, async () => {
        
             //Jsp si on peut tester ca mais bon
             
     })
})

