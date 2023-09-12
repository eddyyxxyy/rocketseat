/**
 * AppError class
 * @class
 */
class AppError {
  /**
   * @property {string} message - The error message
   */
  message;
  /**
   * @property {number} statusCode - The HTTP status code, defaults to 400
   */
  statusCode;

  /**
   * Create an AppError
   * @constructor
   * @param {string} message - The error message
   * @param {number} [statusCode=400] - The HTTP status code
   */
  constructor(message, statusCode = 400) {
    this.message = message;
    this.statusCode = statusCode;
  }
}

module.exports = AppError;
