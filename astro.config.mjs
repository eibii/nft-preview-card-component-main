import { defineConfig } from "astro/config";

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
import vue from "@astrojs/vue";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), vue()],
  site:
    process.env.NODE_ENV === "production"
      ? "https://eibii.github.io"
      : "http://localhost:3000",
  base:
    process.env.NODE_ENV === "production"
      ? "/nft-preview-card-component-main"
      : "/",
});
