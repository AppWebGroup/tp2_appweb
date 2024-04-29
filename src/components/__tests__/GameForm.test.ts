import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import GameForm from '../GameForm.vue'
import type Ship from '@/scripts/ship'

describe('GameForm.vue', ()=> {
    it('Doit pouvoir afficer la liste des éléments dans le select', async () => {
        const listOfShips : Ship[] = [
            { id : 1 , name: 'Ship1' },
            { id : 1 , name: 'Ship2' },
            { id : 1 , name: 'Ship3' }
          ]

        const wrapper = mount(GameForm, {
            props : { listOfShips : listOfShips }
        })


        console.log(wrapper.html())
        expect(wrapper.find('option[value=Ship1]').exists()).toBe(true);
        expect(wrapper.find('option[value=Ship2]').exists()).toBe(true);
        expect(wrapper.find('option[value=Ship3]').exists()).toBe(true);
    }) 

    it('Doit pouvoir afficher le premier de la liste ', async () => {
        const listOfShips : Ship[] = [
            { id : 1 , name: 'Ship1' },
            { id : 1 , name: 'Ship2' },
            { id : 1 , name: 'Ship3' }
          ]

        const wrapper = mount(GameForm, {
            props : { listOfShips : [] }
        })

        await wrapper.vm.$nextTick();
        await wrapper.setProps({ listOfShips });
        await wrapper.vm.$nextTick();

        expect(wrapper.find('select').element.value).toBe('Ship1');
    }) 

    it('Doit afficher aucun  élément est disponible si la liste est vide ', async () => {
        const listOfShips : Ship[] = [
          ]
        const wrapper = mount(GameForm, {
            props : { listOfShips : listOfShips }
        })

        console.log(wrapper.html())
        expect(wrapper.find('option[disabled]').exists()).toBe(true);
        expect(wrapper.find('option[disabled]').text()).toBe('Aucun vaisseau disponible');
    }) 

    it("Doit afficher l'élement selectionné", async() => {
         const listOfShips = [
            { id: 1, name: 'Ship1' },
            { id: 2, name: 'Ship2' },
            { id: 3, name: 'Ship3' }
          ];
      
          const wrapper = mount(GameForm, {
            props: { listOfShips }
          });
      
          await wrapper.vm.$nextTick();
      
          await wrapper.find('select').setValue('Ship2');
      
          expect(wrapper.find('select').element.value).toBe('Ship2');
    })
})