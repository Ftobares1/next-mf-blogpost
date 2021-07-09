const {
  withModuleFederation,
  MergeRuntime,
} = require('@module-federation/nextjs-mf');
const path = require('path');
const withImages = require('next-images')
module.exports = withImages()

module.exports = {
  webpack: (config, options) => {
    const { buildId, dev, isServer, defaultLoaders, webpack } = options;
    const mfConf = {
      name: 'childapp1',
      library: { type: config.output.libraryTarget, name: 'childapp1' },
      filename: 'static/runtime/remoteEntry.js',
      // This is where we configure the remotes we want to consume.
      // We will be using this in App 2.
      remotes: {},
      // as the name suggests, this is what we are going to expose
      exposes: {
        './nav': './pages/page1',
      },
      // over here we can put a list of modules we would like to share
      shared: [],
    };

    // Configures ModuleFederation and other Webpack properties
    withModuleFederation(config, options, mfConf);

    config.plugins.push(new MergeRuntime());

    if (!isServer) {
      config.output.publicPath = 'http://localhost:3000/_next/';
    }

    return config;
  },
};
