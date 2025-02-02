import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/gorilla_armor/', // Убираем для локальной разработки
  build: {
    rollupOptions: {
      output: {
        assetFileNames: '[name].[ext]', // Без хеша
      },
    },
  },
});
