const AppError = require("./AppError");

/**
 * Checks if any of the data retrieved from the Request
 * is null.
 *
 * @param  {object} data - Values caught via Request body, params or query
 * @returns {object}
 */
function checkUserRequestData(data) {
  let errors = {};
  for (const prop in data) {
    if (!data[prop]) {
      errors = appendErrorForMissingProps(prop, errors);
    }
    if (prop === "email" && data[prop]) {
      errors = isValidEmail(data[prop], errors);
    }
    if (prop === "password" && data[prop]) {
      errors = isValidPassword(data[prop], errors);
    }
  }
  return errors;
}

/**
 * It appends errors to the `error` object.
 *
 * Used to append errors when a check for a prop returns
 * `undefined` or `null`.
 *
 * @param {string} prop - The name of the property
 * @param {object} errors - The error object that enumerates each problem in the request
 * @returns {object} Object literal with error messages as properties
 */
function appendErrorForMissingProps(prop, errors) {
  return {
    ...errors,
    [prop]: `Field '${prop}' is null or undefined.`,
  };
}

/**
 * Checks for validity on the e-mail using regexps.
 *
 * @param {string} email - The e-mail passed by the user
 * @param {object} errors  - The error object that enumerates each problem in the request
 * @returns {object} Object literal with error messages as properties
 */
function isValidEmail(email, errors) {
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (!regex.test(email)) {
    errors = {
      ...errors,
      email: `The e-mail that was provided is not valid.`,
    };
  }

  return errors;
}

/**
 * Checks for validity on the password using regexps.
 *
 * @param {string} password - The password passed by the user
 * @param {object} errors  - The error object that enumerates each problem in the request
 * @returns {object} Object literal with error messages as properties
 */
function isValidPassword(password, errors) {
  const complexity =
    /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[*.!@$%^&(){}[\]:;<>,.?/~_+=|]).{6,}$/;

  if (!complexity.test(password)) {
    errors = {
      ...errors,
      password: `Passwords must have: lowercase and uppercase letters, digits, special characters and be at least 6 characters long.`,
    };
  }

  return errors;
}

module.exports = checkUserRequestData;
