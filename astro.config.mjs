import { defineConfig } from "astro/config";
import node from "@astrojs/node";
import purgecss from "astro-purgecss";

export default defineConfig({
  output: "server",
  adapter: node({
    mode: "standalone",
  }),
  integrations: [purgecss()],
});
