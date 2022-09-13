module.exports = {
  '/health': {
    get: (request, response) => {
      response.send('Healthy');
    }
  }
};