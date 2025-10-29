import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // <-- permet d’écouter sur l’IP locale
    port: 5173  // ou ton port actuel
  }
  
})
