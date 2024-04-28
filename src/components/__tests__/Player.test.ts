import { describe, afterEach, expect, vi, it } from 'vitest'
import { mount } from '@vue/test-utils'
import Player from '../Player.vue'
import type Character from '@/scripts/player'


  describe('Player.vue', () => {
    it(`Doit afficher la description du joueur `, async () => {

    const player : Character = {
        name: "wtv",
        experience: 1,
        credit: 0,
        remainingLives: 100,
        ship: "Millenium Falcon",
        isKilled: false
    }
      const wrapper = mount(Player, {
        props : {player}
      })

      expect(wrapper.find('p').text()).toContain("wtv")
      expect(wrapper.find('div').text()).contains('Débutant')
      expect(wrapper.find('div').text()).contains('0')
      expect(wrapper.find('div').text()).contains('100')

    })
  })

  //
  /*
  describe('Player.vue', () => {
    it(`Doit afficher la description du joueur lorsqu'il est vide `, async () => {


    const player : Character = {
        name: undefined,
        experience: 1,
        credit: 0,
        remainingLives: 100,
        ship: "Millenium Falcon",
        isKilled: false
    }
      const wrapper = mount(Player)

    
      expect(wrapper.find('p').text()).toBeUndefined()
      expect(wrapper.find('div').text()).toBeUndefined()

    })
  }) */
