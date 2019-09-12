const pkg = require('./package')

module.exports = {
  mode: 'universal',
  head: {
    titleTemplate: title => `${title ? `${title} · ` : ''}TEAM`
  },
  meta: [
    { charset: 'utf-8' },
    { name: 'application-name', content: pkg.fullname },
    { name: 'name', content: pkg.fullname },
    { name: 'description', content: pkg.description, id: 'desc' },
    { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no' },
    { name: 'apple-mobile-web-app-capable', content: 'yes' },
    { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
    { name: 'MobileOptimized', content: 'width' },
    { name: 'HandheldFriendly', content: 'true' },
    { name: 'author', content: 'Mr. Kananek T.' }
  ],
  manifest: {
    name: 'TEAM',
    lang: 'en',
    description: '',
    short_name: 'TEAM',
    icons: [
      { src: '/app.ico', sizes: '16x16' }
    ],
    start_url: '/sign-in',
    display: 'standalone',
    orientation: 'portrait',
    theme_color: '#ffffff',
    background_color: '#ffffff',
    browser_action: {
      default_icon: '/app.ico',
      default_popup: '/sign-in'
    }
  },
  icons: {
    sizes: [ 32, 57, 72, 144, 512 ]
  },
  workbox: {
    // globDirectory: '.nuxt',
    // globPatterns: [ '**/*.{js,vue,html}' ],
    // swDest: 'static/sw.js'
  },
  loading: { color: '#ee5151' },
  css: [
    './assets/scss/index.scss',
    'codemirror/lib/codemirror.css',
    'vue-multiselect/dist/vue-multiselect.min.css',
    'github-markdown-css/github-markdown.css'
  ],
  plugins: [
    './plugins/vue-toast.js',
    './plugins/vue-tabindex.js',
    './plugins/vue-multiselect.js',
    // './plugins/vue-datepicker.js',
    { src: './plugins/vue-loading.js', ssr: false },
    { src: './plugins/vue-codemirror.js', ssr: false }
  ],
  router: {
    middleware: ['auth'],
    linkActiveClass: 'active',
    linkExactActiveClass: 'active'
  },
  modules: [
    [ '@nuxtjs/axios', { https: process.env.NODE_ENV !== 'development' } ],
    [ '@nuxtjs/pwa', { icon: true } ],
    '@nuxtjs/auth',
    'nuxt-fontawesome',
    'bootstrap-vue/nuxt'
  ],
  auth: {
    strategies: {
      local: {
        endpoints: {
          login: { url: '/auth/login', method: 'post', propertyName: 'token' },
          logout: { url: '/auth/logout', method: 'post' },
          user: { url: '/auth/user', method: 'get', propertyName: 'user' }
        }
      }
    },
    redirect: { login: '/sign-in', logout: '/sign-in', home: '/' }
  },
  fontawesome: {
    component: 'fa',
    imports: [
      { icons: ['fas'], set: '@fortawesome/free-solid-svg-icons' },
      { icons: ['fab'], set: '@fortawesome/free-brands-svg-icons' }
    ]
  },
  bootstrapVue: { bootstrapCSS: false },
  axios: { baseURL: process.env.AXIOS_BASE_URL || 'https://team.touno.io/' },
  build: { quiet: false }
}
