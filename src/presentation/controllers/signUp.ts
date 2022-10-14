import { HttpRequest, HttpResponse } from 'presentation/protocols/http';

import { MissingParamError } from 'presentation/errors/missing-param';
import { badRequest } from 'presentation/helpers/http-helper';

export class SignUpController {
  public handle(httpRequest: HttpRequest): HttpResponse {
    const requiredFields = ['name', 'email', 'passwordConfirmation'];

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
