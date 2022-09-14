import app from './app'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const config = require('./.mockserver.js')

// Setup routes
for (const path in config.routes) {
  const appRoute: any = app.route(path)
  for (const method in config.routes[path]) {
    const handler = config.routes[path][method]
    appRoute[method](handler)
    console.log(appRoute)
  }
}

app.listen(config.port, () => {
  console.log(`Running at http://${config.host}:${config.port}`)
})
