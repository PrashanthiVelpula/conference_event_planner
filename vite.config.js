import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://github.com/PrashanthiVelpula/conference_event_planner.git",
  plugins: [react()],
})
