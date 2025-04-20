import { defineConfig } from "astro/config";

import sitemap from "@astrojs/sitemap";

import vercel from "@astrojs/vercel";

// https://astro.build/config
export default defineConfig({
    integrations: [sitemap()],
    output: "static",
    adapter: vercel()
});