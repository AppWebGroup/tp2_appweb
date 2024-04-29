<script setup lang="ts">
import type Ranking from '../scripts/ranking'

const props = defineProps<{
    rankingList: Ranking[]
}>()
const galaticCredits = "CG"

</script>
<template>
        <table class="table">
            <thead class="thead-dark">
                <tr>
                    <th scope="col" class="text-center align-middle">Pointage</th>
                </tr>
            </thead>
            <tbody>
                <tr  
                v-for="ranking of props.rankingList" 
                v-bind:key="ranking.id">
                    <td>
                        {{ ranking.name + " - " + ranking.score + " " + galaticCredits }}
                    </td>
                </tr>
            </tbody>
        </table>
</template>
