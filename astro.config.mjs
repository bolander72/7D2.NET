import { defineConfig } from "astro/config";

import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
    integrations: [sitemap()],
    output: "static",
    adapter: vercel(),
    vite: {
        plugins: [tailwindcss()],
        resolve: {
            alias: {
                '@': '/src'
            }
        }
    },
    viewTransitions: true,
});