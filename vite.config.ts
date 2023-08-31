import { defineConfig } from 'vite'
import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'

// const APP_NAME = 'ELECTRIC_FACTORY_WEB'
const ENV_PREFIX = 'APP_'
const isProductionEnv = process.env.NODE_ENV === 'production'
const serviceOrigin = 'http://dev.sm.fet.bonc.test'
const port = 9304
const publicPath = isProductionEnv ? '/electric-factory-web' : '/'

// https://vitejs.dev/config/
export default defineConfig({
  base: publicPath,
  envPrefix: ENV_PREFIX,
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        math: 'always'
      }
    }
  },
  resolve: {
    preserveSymlinks: true,
    alias: {
      '@': resolve('src')
    }
  },
  plugins: [vue()],
  build: {
    commonjsOptions: {
      include: [/node_modules/]
    }
  },
  server: {
    host: true,
    port,
    open: false,
    proxy: {
      '/test/api': {
        target: serviceOrigin,
        changeOrigin: true
      }
    }
  }
})
