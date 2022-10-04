import { fileURLToPath } from 'node:url'
import { defineNuxtModule } from '@nuxt/kit'

export default defineNuxtModule({
  meta: {
    name: 'app-components',
    configKey: 'appComponents'
  },
  hooks: {
    'components:dirs' (dirs) {
      dirs.push({
        path: fileURLToPath(new URL('./../assets/components', import.meta.url)),
        prefix: 'app'
      })
    }
  }
})
