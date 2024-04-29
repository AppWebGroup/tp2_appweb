import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import Action from '../Action.vue'

describe('Action.vue', () => {

    it("Doit afficher les buttons d'actions.", () => {
        const wrapper = mount(Action)

        expect(wrapper.find('div[name="fightButton"]').exists()).toBe(true)
        expect(wrapper.find('div[name="finishMissionButton"]').exists()).toBe(true)
        expect(wrapper.find('div[name="repairSpaceShip"]').exists()).toBe(true)

        expect(wrapper.find('div[name="fightButton"]').text()).toContain('Combattre')
        expect(wrapper.find('div[name="finishMissionButton"]').text()).toContain('Terminer la mission')
        expect(wrapper.find('div[name="repairSpaceShip"]').text()).toContain('Terminer la mission et réparer le vaisseau')
    })

    it('Sur Combattre, doit émettre un événement.', async () => {
        const wrapper = mount(Action)
    
        await wrapper.find('div[name="fightButton"]').trigger('click')
    
        expect(wrapper.emitted()).toHaveProperty('startFight')
    })

    it('Sur terminer la mission, doit émettre un événement.', async () => {
        const wrapper = mount(Action)
    
        await wrapper.find('div[name="finishMissionButton"]').trigger('click')
    
        expect(wrapper.emitted()).toHaveProperty('finishMission')
    })
    
    it('Sur Réparer le vaisseau et terminer la mission, doit émettre un événement.', async () => {
        const wrapper = mount(Action)
    
        await wrapper.find('div[name="repairSpaceShip"]').trigger('click')
    
        expect(wrapper.emitted()).toHaveProperty('repairSpaceShip')
    })
})