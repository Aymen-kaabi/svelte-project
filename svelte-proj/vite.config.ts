import postcss from './postcss.config.cjs';
import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

export default defineConfig({
  plugins: [svelte()],
  css:{
    postcss
  }
})
