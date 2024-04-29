---
outline: deep
---

# Revue de code #3 de Aboue Abigail Helene Beke fait par Andry Ravelomanantsoa

# TP2 Semaine 3

**Points forts**

L'ajout de tests pour vérifier si la mission est bel et bien valide est très utile :

```

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

```

Bon respect des principes de programmations. Très bonne qualité de code.