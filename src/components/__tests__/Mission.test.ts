import { describe, afterEach, expect, vi, it } from 'vitest'
import { mount } from '@vue/test-utils'
import Mission from '../Mission.vue'

describe('Mission.vue', () => {
    it(`Doit afficher le bon niveau mission`, async () => {

      const wrapper = mount(Mission, {
        props : { levelMission: 1}
      })

      expect(wrapper.find('div').text()).contains('1/5')
      expect(wrapper.find('p').text()).toStrictEqual("Mission en cours")
      expect(wrapper.find('div').text()).contains('Objectif: survivre à 5 missions en obtenant le plus de crédits')
    })
  })

  describe('Mission.vue', () => {
    it(`Doit lancer un message si la mission est plus petite que 1`, async () => {
        const wrapper = mount(Mission, {
            props : { levelMission: 0}
        })

        expect(wrapper.find('p[name=titleMission]').exists()).toBe(false)
        expect(wrapper.find('div[levelMission]').exists()).toBe(false)
        expect(wrapper.find('div[descriptionGame]').exists()).toBe(false)

        expect(wrapper.find('p[name=invalidLevelMission]').exists()).toBe(true)
        expect(wrapper.find('p[name=invalidLevelMission]').text()).toContain('The level mission is not valid...')
    })
  })

  describe('Mission.vue', () => {
    it(`Doit lancer un message si la mission est plus grande que que 5`, async () => {

        const wrapper = mount(Mission, {
            props : { levelMission: 6}
        })

        expect(wrapper.find('p[name=titleMission]').exists()).toBe(false)
        expect(wrapper.find('div[levelMission]').exists()).toBe(false)
        expect(wrapper.find('div[descriptionGame]').exists()).toBe(false)

        expect(wrapper.find('p[name=invalidLevelMission]').exists()).toBe(true)
        expect(wrapper.find('p[name=invalidLevelMission]').text()).toContain('The level mission is not valid...')
      
    })
  })




