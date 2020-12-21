'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
<<<<<<< HEAD
  MOCK: 'flase'
=======
  MOCK: 'false'
>>>>>>> e9e4f47827821ae0f03ca42749ed8340b2117ea9
})
