const { useSimpleRoutes } =  require('./useSimpleRoutes');
require('dotenv').config()

const useRoutes = () => {
  return process.env.ROUTES_PATH ? import(process.env.ROUTES_PATH) : useSimpleRoutes(process.env.MOCKING_API)
}

module.exports = {
  routesPath: process.env.ROUTES_PATH,
  simpleSetup: process.env.SIMPLE_SETUP,
  mockingApi: process.env.MOCKING_API,
  host: process.env.HOST || 'localhost',
  port: process.env.PORT || 8080,
  routes: useRoutes(),
} 

