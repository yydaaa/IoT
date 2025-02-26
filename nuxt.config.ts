export default {
  buildModules: [
    '@nuxt/postcss8', 
  ],

  css: [
    '@fortawesome/fontawesome-free/css/all.css',
    '@/assets/css/main.css',
  ],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  compatibilityDate: '2025-02-24',
};