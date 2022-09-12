module.exports = {
  '/health': {
    get: (request, response, next) => {
      response.send('Healthy')
    }
  }
}
