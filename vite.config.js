import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
build:{
  assetsInclude:['assets'],
},
  server:{
    host:true,
  },
  plugins: [vue()],
})
