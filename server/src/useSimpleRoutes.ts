import { Request, Response } from 'express'

module.exports = {
  '/*': {
    get: (request: Request, response: Response) => {
      response
        .send({
          message: 'GET simple from mock server'
        })
        .status(200)
    },
    post: (request: Request, response: Response) => {
      response
        .send({
          message: 'POST simple response from mock server'
        })
        .status(201)
    },
    put: (request: Request, response: Response) => {
      response
        .send({
          message: 'PUT simple response from mock server'
        })
        .status(201)
    },
    delete: (request: Request, response: Response) => {
      response
        .send({
          message: 'DELETE simple response from mock server'
        })
        .status(204)
    }
  }
}
