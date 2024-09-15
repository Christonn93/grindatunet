import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
   base: '/',
   server: {
    proxy: {
      '/admin': {
        target: 'www.grindatunet.no/admin/wp-admin.php',
        changeOrigin: true,
      },
    },
  },
})
