'use strict'

const cacheManager = require('cache-manager')
const store = require('cache-manager-mongoose')

/**
 * @module MongooseStore
 * @description Mongoose Store Provider
 */
module.exports = (config) => {
  config.store = store
  return cacheManager.caching(config)
}
