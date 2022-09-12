require('dotenv').config()

module.exports = {
  id: process.env.MOCKING_API,
  host: process.env.HOST ?? 'localhost',
  port: process.env.PORT ?? '8081',
  log: false,
  routes: require(process.env.ROUTES_PATH) ?? {
    '/': {
      get: (request, response, next) => {
        return response.send({
          message: 'Hello, World!',
          warn: 'This is the default index route in config.js'
        })
      }
    }
  }
}
