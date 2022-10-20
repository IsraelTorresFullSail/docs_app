const withPlugins = require('next-compose-plugins')
const withImages = require('next-images')
const webpack = require('webpack')
const path = require('path')
const withTM = require('next-transpile-modules')

module.exports = withPlugins([[withImages], [withTM]], {
  images: {
    disableStaticImages: true,
  },
  webpack(config, options) {
    config.resolve.modules.push(path.resolve('./'))
    return config
  },
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  serverRuntimeConfig: {},
  publicRuntimeConfig: {
    // API_URL: process.env.API_URL,
    // REACT_APP_WEBSITE_URL: process.env.REACT_APP_WEBSITE_URL,
  },
})
