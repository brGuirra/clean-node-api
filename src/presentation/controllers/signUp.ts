import { HttpRequest, HttpResponse } from 'presentation/protocols/http';

import { MissingParamError } from 'presentation/errors/missing-param';

export class SignUpController {
  public handle(httpRequest: HttpRequest): HttpResponse {
    if (!httpRequest.body.name) {
      return {
        statusCode: 400,
        body: new MissingParamError('name'),
      };
    }

    if (!httpRequest.body.email) {
      return {
        statusCode: 400,
        body: new MissingParamError('email'),
      };
    }

    if (!httpRequest.body.passwordConfirmation) {
      return {
        statusCode: 400,
        body: new MissingParamError('password confirmation'),
      };
    }

    return {
      statusCode: 200,
      body: {},
    };
  }
}

console.log('Teste');
