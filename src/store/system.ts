// 系统变量
import { defineStore } from 'pinia';
export const useSystemStore = defineStore('system', {
  state: () => ({
    locale: 'zh-Hans',
    token: ''
  }),

  getters: {},

  actions: {
    clearToken(): void {
      this.token = null;
    },
    setToken(token: string): void {
      this.token = token;
    }
  }
});
