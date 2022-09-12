const express = require('express')
const config = require('./config')

const app = express()

for (const route in config.routes) {
  const appRoute = app.route(route)
  const methods = config.routes[route]
  for (const method in methods) {
    const routeFn = methods[method]
    appRoute[method](routeFn)
  }
}

app.listen(config.port, () => {
  console.log(`Running at http://${config.host}:${config.port}`)
})
