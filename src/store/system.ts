// 系统变量
import { defineStore } from 'pinia'
export const useSystemStore = defineStore('system', {
  state: () => ({
    locale: 'zh-Hans'
  }),

  getters: {},

  actions: {}
})
