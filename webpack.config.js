const webpack = require('webpack')
const fs      = require('fs')
const path    = require('path'),
      join    = path.join,
      resolve = path.resolve;

const getConfig = require('hjs-webpack')

const NODE_ENV = process.env.NODE_ENV
const isDev = NODE_ENV === 'development'

const root    = resolve(__dirname)
const src     = join(root, 'src')
const modules = join(root, 'node_modules')
const dest    = join(root, 'public')

var config = getConfig({
  isDev: isDev,
  in: join(src, 'app.js'),
  out: dest,
  clearBeforeBuild: true
})

config.postcss = [].concat([
  require('precss')({}),
  require('autoprefixer')({})
])

// CSS Modules classname config
const cssModulesNames = `${isDev ? '[path][name]__[local]__' : ''}[hash:base64:5]`

// Regex to match existing css loaders in webpack
const matchCssLoaders = /(^|!)(css-loader)($|!)/;

// Fn to find loaders
const findLoader = (loaders, match) => {
  const found = loaders.filter(l => l &&
      l.loader && l.loader.match(match));
  return found ? found[0] : null;
}
// existing css loader
const cssloader =
  findLoader(config.module.loaders, matchCssLoaders);

// Create new copy of existing loader and add custom loader
const newloader = Object.assign({}, cssloader, {
  test: /\.module\.css$/,
  include: [src],
  loader: cssloader.loader
    .replace(matchCssLoaders,
    `$1$2?modules&localIdentName=${cssModulesNames}$3`)
})

// Push created loader into loaders
config.module.loaders.push(newloader);
cssloader.test =
  new RegExp(`[^module]${cssloader.test.source}`)
cssloader.loader = newloader.loader

// Loader for any other css file
config.module.loaders.push({
  test: /\.css$/,
  include: [modules],
  loader: 'style!css'
})

module.exports = config
