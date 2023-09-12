/**
 * Checks if a user exists in the database based on their email.
 *
 * @param {object} conn - The Knex.js connection object
 * @param {string} userEmail - The user's e-mail to check
 * @returns {promise} - Returns a promise that resolves to the user object if found, otherwise resolves to undefined.
 */
function userExists(conn, userEmail) {
  return conn("users").where({ email: userEmail }).first();
}

module.exports = userExists;
