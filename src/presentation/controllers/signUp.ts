import { HttpRequest, HttpResponse } from 'presentation/protocols/http';

import { Controller } from 'presentation/protocols/controller';
import { MissingParamError } from 'presentation/errors/missing-param';
import { badRequest } from 'presentation/helpers/http-helper';

export class SignUpController implements Controller {
  public handle(httpRequest: HttpRequest): HttpResponse {
    const requiredFields = ['name', 'email', 'password', 'passwordConfirmation'];

    for (const field of requiredFields) {
      if (!httpRequest.body[field]) {
        return badRequest(new MissingParamError(field));
      }
    }

    return {
      statusCode: 200,
      body: {},
    };
  }
}
