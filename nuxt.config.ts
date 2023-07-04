import { resolve } from "path"
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  alias: {
    assets: "/<rooDir>/assets"
  },
  devtools: { enabled: true }
})
