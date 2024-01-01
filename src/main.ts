import './index.css'

import { createApp } from 'vue'
import { VueQueryPlugin } from '@tanstack/vue-query'
import type { VueQueryPluginOptions } from '@tanstack/vue-query'
import App from './App.vue'

const vueQueryPluginOptions: VueQueryPluginOptions = {
  queryClientConfig: {
    defaultOptions: {
      queries: {
        retry: 0,
        refetchOnWindowFocus: false
      }
    }
  }
}

createApp(App).use(VueQueryPlugin, vueQueryPluginOptions).mount('#app')
