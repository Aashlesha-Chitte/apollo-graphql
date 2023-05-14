/* eslint-disable no-constructor-return */
import {
  ApolloError,
  AuthenticationError,
  ForbiddenError,
} from 'apollo-server-express';

class ErrorHandler {
  constructor(err) {
    const { message, status } = err;
    switch (status) {
      case 401:
        return ErrorHandler.authenticationError();
      case 403:
        return ErrorHandler.forbiddenError();
      default:
        return ErrorHandler.apolloError(message, status);
    }
  }

  static authenticationError() {
    throw new AuthenticationError('User must authenticate');
  }

  static forbiddenError() {
    throw new ForbiddenError('Server refused to authorize it');
  }

  static apolloError(message, status) {
    throw new ApolloError(message, status);
  }
}

export default ErrorHandler;
