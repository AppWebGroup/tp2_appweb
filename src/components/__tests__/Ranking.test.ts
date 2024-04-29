import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import RankingTab from '../RankingTab.vue'
import type Ranking from '@/scripts/ranking'


describe('RankingTab.vue', () => {
    it(`Doit afficher le tableau de pointages `, async () => {
    
      const rankingList : Ranking[] = [
        {
            "id": 1,
            "name": "Barbie",
            "score": 500
          },
          {
            "id": 2,
            "name": "Beyonce",
            "score": 495
          },
          {
            "id": 3,
            "name": "SZA",
            "score": 490
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
        it(`Doit afficher le tableau de pointages quand il est vide`, async () => {
            const rankingList : Ranking[] = [] 
            const wrapper = mount(RankingTab, {
                props : {rankingList}
        
                })
        
             const rankingExpectList = wrapper.findAll('td').map(td => td.text())

             expect(rankingExpectList.length).toBe(0)
            })
    })


