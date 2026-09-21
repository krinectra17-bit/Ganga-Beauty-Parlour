import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'zzh2p93h',
    dataset: 'production'
  },
  deployment: {
    autoUpdates: false,
  }
})
