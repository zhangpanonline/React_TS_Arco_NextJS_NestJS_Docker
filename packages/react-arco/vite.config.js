import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { vitePluginForArco } from '@arco-plugins/vite-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // https://github.com/arco-design/arco-plugins/blob/main/packages/plugin-vite-react/README.zh-CN.md
    vitePluginForArco({ style: 'css' })
  ]
})
