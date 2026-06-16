import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

// Configuración de Vite.
export default defineConfig({
  // Plugins del proyecto.
  plugins: [
    tailwindcss(), // Integra Tailwind CSS dentro del flujo de Vite.
  ],
});
