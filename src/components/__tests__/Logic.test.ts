import { describe, afterEach, expect, vi, it } from 'vitest'
import { mount } from '@vue/test-utils'
import type Player from '@/scripts/player'
import type Enemy from '@/scripts/enemy'
import Logic from '../Logic.vue'
import type Ship from '@/scripts/ship'
import {utility} from '@/scripts/utility'


describe('Logic.vue', () => {

    it("Doit contenir les composantes du jeu.", () => {
        const player: Player = {

            name: "Rihanna",
            experience: 1,
            credit: 0,
            remainingLives: 100,
            ship: 'Millenium Falcon',
            isKilled: false
        } 
        const enemyShip : Ship = { id: 1, name: 'X-wing'} as Ship
        const enemy: Enemy = {
            name: 'DarkVador',
            experience: 1,
            credit: 50,
            ship: enemyShip,
            remainingLives: 100,
            isKilled: false
        } as Enemy


        const wrapper = mount(Logic,  {
            props : {
                isGameStarted : true,
                currentPlayer: player,
                currentEnemy: enemy
            }})

        expect(wrapper.find('EnemyVue').exists())
        expect(wrapper.find('PlayerVue').exists())
        expect(wrapper.find('Mission').exists())
        expect(wrapper.find('Action').exists())

    })
})

//Tests des fonctions présentes de la logic
describe('Logic.vue', () => {

    it("Un nombre aléatoire générer selon une valeur minimum et maximum", async()=> {
        
        const randomNumber = utility.generateRandomNumber(0,10)
        
        expect(randomNumber).toBeLessThanOrEqual(10)
        expect(randomNumber).toBeGreaterThanOrEqual(0)

    })
})

describe('Logic.vue', () => {

    it("Récupérer le nombre de vie perdues qui doit être entre 3 et 6 inclus", async()=> {

        const lifePercentageLost = utility.getLostLifePercentage()
        
        expect(lifePercentageLost).toBeLessThanOrEqual(6)
        expect(lifePercentageLost).toBeGreaterThanOrEqual(3)
    })
})

describe('Logic.vue', ()=> {
    it("Doit retourner le nombre de points de vies sauvées du vaisseau ", async()=> {
        
        const nbLifePercentage = utility.getRepairShipPercentage(100)

        expect(nbLifePercentage).toBeLessThanOrEqual(100/5)
    })
})


describe('Logic.vue', ()=> {
    it(" Doit retourner le nombre de points de vies pour 0 crédits galactiques", async()=> {
        const nbLifePercentage = utility.getRepairShipPercentage(0)

        expect(nbLifePercentage).toBeLessThanOrEqual(0)
    })
})


describe('Logic.vue', ()=> {
    it(" Doit retourner true si le vaisseau a été touché", async()=> {

        const randomNumber = 9
        const maxChances = 7
        const isShipTouch = utility.isShipReach(randomNumber, maxChances)

        expect(isShipTouch).toBe(false)
        
    })
})

describe('Logic.vue', ()=> {
    it(" Doit retourner false si le vaisseau n'a été touché", async()=> {
        const randomNumber = 7
        const maxChances = 9
        const isShipTouch = utility.isShipReach(randomNumber, maxChances)

        expect(isShipTouch).toBe(true)
    })
})


