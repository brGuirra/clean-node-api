import { HttpRequest, HttpResponse } from 'presentation/protocols/http';

import { MissingParamError } from 'presentation/errors/missing-param';
import { badRequest } from 'presentation/helpers/http-helper';

export class SignUpController {
  public handle(httpRequest: HttpRequest): HttpResponse {
    if (!httpRequest.body.name) {
      return badRequest(new MissingParamError('name'));
    }

    if (!httpRequest.body.email) {
      return badRequest(new MissingParamError('email'));
    }

    if (!httpRequest.body.passwordConfirmation) {
      return badRequest(new MissingParamError('password confirmation'));
    }

    return {
      statusCode: 200,
      body: {},
    };
  }
}
