// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  css: ["bootstrap/Dist/css/bootstrap.min.css"],
  modules : ["@nuxtjs/supabase"],
  supabase : { redirect: false},
})
