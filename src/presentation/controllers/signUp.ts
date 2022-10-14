import { HttpRequest, HttpResponse } from 'presentation/protocols/http';

import { Controller } from 'presentation/protocols/controller';
import { EmailValidator } from 'presentation/protocols/email-validator';
import { InvalidParamError } from 'presentation/errors/invalid-param';
import { MissingParamError } from 'presentation/errors/missing-param';
import { badRequest } from 'presentation/helpers/http-helper';

export class SignUpController implements Controller {
  constructor(private readonly emailValidator: EmailValidator) {}

  public handle(httpRequest: HttpRequest): HttpResponse {
    const requiredFields = ['name', 'email', 'password', 'passwordConfirmation'];

    for (const field of requiredFields) {
      if (!httpRequest.body[field]) {
        return badRequest(new MissingParamError(field));
      }
    }

    const isValid = this.emailValidator.isValid(httpRequest.body.email);

    if (!isValid) {
      return badRequest(new InvalidParamError('email'));
    }

    return {
      statusCode: 200,
      body: {},
    };
  }
}
