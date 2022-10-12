import { HttpRequest, HttpResponse } from 'presentation/protocols/http';

export class SignUpController {
  public handle(httpRequest: HttpRequest): HttpResponse {
    if (!httpRequest.body.name) {
      return {
        statusCode: 400,
        body: new Error('Missing param: name'),
      };
    }

    if (!httpRequest.body.email) {
      return {
        statusCode: 400,
        body: new Error('Missing param: email'),
      };
    }

    if (!httpRequest.body.passwordConfirmation) {
      return {
        statusCode: 400,
        body: new Error('Missing param: password confirmation'),
      };
    }

    return {
      statusCode: 200,
      body: {},
    };
  }
}
