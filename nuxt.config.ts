
export default ({
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: [
    '@nuxtjs/i18n', 'nuxt-icon'
  ],
  i18n: {
    vueI18n: './i18n.config.ts' // if you are using custom path, default 
  }
});
