import { describe, expect, it, vi, beforeEach, afterEach } from 'vitest'
import { mount } from '@vue/test-utils'
import EnemyVue from '../Enemy.vue'
import type Enemy from '@/scripts/enemy'
import type Ship from '@/scripts/ship'

describe('Enemy.vue', () => {
    
    it('Doit afficher les bonnes informations dans le composant Enemy', () => {
        const enemyShip : Ship = { id: 1, name: 'X-wing'} as Ship

        const enemy: Enemy = {
            name: 'DarkVador',
            experience: 1,
            credit: 50,
            ship: enemyShip,
            remainingLives: 100,
            isKilled: false
        } as Enemy

        const wrapper = mount(EnemyVue, {
            props : {
                enemy: enemy
            }
        })

        expect(wrapper.find('p[name="enemyName"]').exists()).toBe(true)
        expect(wrapper.find('p[name="enemyName"]').text()).toContain('DarkVador')

        expect(wrapper.find('div[name=enemyShip]').text()).toContain(enemyShip.name)
        expect(wrapper.find('div[name=enemyExperience]').text()).toContain(`Débutant - ${enemy.credit} CG`)
    })

    it('Doit afficher la barre de progression avec le nombre de point de vie de', () => {
        const enemyShip : Ship = { id: 1, name: 'X-wing'} as Ship
        const enemy: Enemy = {
            name: 'DarkVador',
            experience: 1,
            credit: 50,
            ship: enemyShip,
            remainingLives: 100,
            isKilled: false
        } as Enemy

        const wrapper = mount(EnemyVue, {
            props : {
                enemy: enemy
            }
        })

        expect(wrapper.find('.progress-bar').exists()).toBe(true)
        expect(wrapper.find('.progress-bar').element.style.width).toBe('100%')
    })

    it(`Affiche loading enemy si l'enemy est pas présent`,() => {
        const wrapper = mount(EnemyVue)

        expect(wrapper.find('.progress-bar').exists()).toBe(false)
        expect(wrapper.find('div[name=enemyShip]').exists()).toBe(false)
        expect(wrapper.find('div[name=enemyExperience]').exists()).toBe(false)

        expect(wrapper.find('p[name=loadingEnemy]').exists()).toBe(true)
        expect(wrapper.find('p[name=loadingEnemy]').text()).toContain('Loading enemy...')
    })
})