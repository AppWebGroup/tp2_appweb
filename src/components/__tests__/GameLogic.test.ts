import { describe, afterEach, expect, vi, it } from 'vitest'
import { mount } from '@vue/test-utils'
import { createRouter, createWebHistory } from 'vue-router'
import routes from '../../router/routes'
import GameLogic from '../Action.vue'