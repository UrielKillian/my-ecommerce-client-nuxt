// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindTypography from '@tailwindcss/typography'
export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss'],
    components: {
        global: true,
        dirs: ['~/shared/components','~/mystore/components']
    },
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    tailwindcss: {
        cssPath: '~/shared/assets/css/tailwind.css',
        configPath: '~/tailwind.config',
        exposeConfig: false,
        config: {
            content: [
                'components/**/*.{vue,js,ts}',
                'layouts/**/*.vue',
                'pages/**/*.vue',
                'composables/**/*.{js,ts}',
                'plugins/**/*.{js,ts}',
                'App.{js,ts,vue}',
                'app.{js,ts,vue}',
                'Error.{js,ts,vue}',
                'error.{js,ts,vue}',
                'content/**/*.md'
            ],
            plugins: [tailwindTypography]
        },
        injectPosition: 0,
        viewer: true,

    },
})
