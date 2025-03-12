import { defineConfig } from 'vite';
import { ViteMinifyPlugin } from 'vite-plugin-minify' 

export default defineConfig({
    plugins: [
        ViteMinifyPlugin({})
    ],
    build: {
        outDir: '../dist',
        emptyOutDir: true,



        minify: true,
        modulePreload: {
            polyfill: false
        }
    },
    base: "./",
});