/**
 * @extends Error
 */
export default class BaseError extends Error {
  // isOperational = false
  constructor(
    message,
    status,
    isPublic,
    data,
  ) {
    super(message);
    this.isOperational = true; // This is required since bluebird 4 doesn't append it anymore.
    this.status = status;
    this.isPublic = isPublic;
    this.data = data;
    Error.captureStackTrace(this, this.constructor);
  }
}
