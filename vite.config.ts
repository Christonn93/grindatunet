import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { viteStaticCopy } from 'vite-plugin-static-copy';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),
    viteStaticCopy({
      targets: [
        {
          src: 'index.html', // The file to copy
          dest: '.',          // Destination directory (dist folder)
          rename: '404.html'  // Name it 404.html
        }
      ]
    })
  ],
   base: '/'
})
