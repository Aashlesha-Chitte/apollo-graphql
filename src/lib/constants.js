/**
 * List of HTTP Methods
 */
export const HttpMethods = {
  GET: 'GET',
  DELETE: 'DELETE',
  POST: 'POST',
  PUT: 'PUT',
};

/**
 * List of Environment Variables
 */
export const EnvVars = {
  DEV: 'dev',
  LOCAL: 'local',
  PROD: 'production',
  TEST: 'test',
};

export const loggingVars = {
  INFO: 'info',
  ERR: 'error',
  DEBUG: 'debug',
  CONFIG_TOKEN: 'config',
};

/**
* List of Status Codes
*/
export const HttpStatusCodes = {
  OK: 200,
  CREATED: 201,
  NO_CONTENT: 204,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  NOT_FOUND: 404,
  UNPROCESSABLE: 422,
  INTERNAL_SERVER_ERROR: 500,
};
