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




