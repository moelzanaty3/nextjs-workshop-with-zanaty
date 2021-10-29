const nextEnv = require('next-env')
const dotenvLoad = require('dotenv-load')

dotenvLoad()

const withNextEnv = nextEnv()
module.exports = withNextEnv()
/**
 * If you want to change the build system's behavior, extend Next.js's features, or add ENV variables, you can do this easily in the next-config.js file.

Either export and objet, Or a function

module.exports = {
  webpack: {
    // webpack config properties
  },
  env: {
    MY_ENV_VAR: process.env.SECRET,
  },
}

or function:
const { PHASE_PRODUCTION_SERVER } = require('next/constants')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = (phase, { defaultConfig }) => {
  if (phase === PHASE_PRODUCTION_SERVER) {
    return {
      ...defaultConfig,
      webpack: {
        plugins: [new BundleAnalyzerPlugin()],
      },
    }
  }

  return defaultConfig
}
 */
