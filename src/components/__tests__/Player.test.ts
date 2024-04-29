import { describe, afterEach, expect, vi, it } from 'vitest'
import { mount } from '@vue/test-utils'
import PlayerVue from '../Player.vue'
import type Player from '@/scripts/player'
import type Ship from '@/scripts/ship'


  describe('Player.vue', () => {
    it(`Doit afficher les bonnes descriptions du joueur dans le composant`, async () => {

        const player: Player = {

            name: "Burna Boy",
            experience: 1,
            credit: 0,
            remainingLives: 100,
            ship: 'Millenium Falcon',
            isKilled: false
        } 

        const wrapper = mount(PlayerVue, {
            props : {
                player: player
            }
        })

        expect(wrapper.find('p[name="playerName"]').exists()).toBe(true)
        expect(wrapper.find('p[name="playerName"]').text()).contains(player.name)

        expect(wrapper.find('div[name=playerShip]').text()).contains(player.ship)
        expect(wrapper.find('div[name=playerExperience]').text()).toContain(`Débutant - ${player.credit} CG`)

    })
  })

  
  it('Doit afficher la barre de progression avec le nombre de point de vie du joueur', () => {
   
    const player: Player = {

        name: "wtv",
        experience: 1,
        credit: 0,
        remainingLives: 100,
        ship: 'Millenium Falcon',
        isKilled: false
    } 

    const wrapper = mount(PlayerVue, {
        props : {
            player: player
        }
    })


    expect(wrapper.find('.progress-bar').exists()).toBe(true)
    expect(wrapper.find('.progress-bar').element.style.width).toBe('100%')
})

it(`N'Affiche pas les composantes si le joueur n'est pas présent`,() => {
    const wrapper = mount(PlayerVue)

    expect(wrapper.find('.progress-bar').exists()).toBe(false)
    expect(wrapper.find('div[name=playerShip]').exists()).toBe(false)
    expect(wrapper.find('div[name=playerExperience]').exists()).toBe(false)

    expect(wrapper.find('p[name=undefinedPlayer]').exists()).toBe(true)
    expect(wrapper.find('p[name=undefinedPlayer]').text()).toContain('player is not defined...')
})
