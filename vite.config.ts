import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/juzelleprojects/',  // GitHub repository name
  plugins: [react()],
  
  build: {
    outDir: 'dist',  // Optional: you can specify the output directory
    assetsDir: 'assets',  // Optional: set assets directory
  },
});