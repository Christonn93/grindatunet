import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
   base: '/',
   server: {
    proxy: {
      '/wp-json': {
        target: 'https://admin.grindatunet.no',
        changeOrigin: true,
        secure: false,
      },
    },
  },
})
