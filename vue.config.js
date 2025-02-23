const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: process.env.NODE_ENV === 'production'
      ? '/wasm-process/'
      : '/',
  transpileDependencies: [],
  devServer: {
    headers: {
      "Cross-Origin-Opener-Policy": "same-origin",
      "Cross-Origin-Embedder-Policy": "require-corp"
    }
  },
})
