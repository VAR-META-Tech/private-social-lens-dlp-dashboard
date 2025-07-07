import tailwindcss from "@tailwindcss/vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  plugins: [
    tailwindcss(),
    svelte({ compilerOptions: { runes: true } })
  ],
  resolve: { alias: { $lib: path.resolve("./src/lib"), $src: path.resolve("./src") } }
});
