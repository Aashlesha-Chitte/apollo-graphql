import { HttpStatusCodes } from '../constants';

import BaseError from './BaseError';

/**
 * Class representing an API error.
 * @extends BaseError
 */
class APIError extends BaseError {
  /**
   * Creates an API error.
   * @param {string} message - Error message.
   * @param {number} status - HTTP status code of error.
   * @param {boolean} isPublic - Whether the message should be visible to user or not.
   */
  constructor(
    message,
    status = HttpStatusCodes.INTERNAL_SERVER_ERROR,
    data = [],
    isPublic = false,
  ) {
    super(message, status, isPublic, data);
  }
}

export default APIError;
