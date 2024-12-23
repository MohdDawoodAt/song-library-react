import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  define: {
    "process.env.VITE_SONGS_LIBRARY_API": JSON.stringify(
      process.env.VITE_SONGS_LIBRARY_API
    ),
  },
  plugins: [react()],
});
