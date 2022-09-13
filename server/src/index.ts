import app from './app'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const config = require('./.mockserver.js')

// Setup routes
for (const route in config.routes) {
  const appRoute = app.route(route)
  const methods = config.routes[route]
  console.log(appRoute)
}

app.listen(config.port, () => {
  console.log(`Running at http://${config.host}:${config.port}`)
})
