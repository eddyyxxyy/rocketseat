/**
 * Checks if a user exists in the database based on their email.
 *
 * @param {object} conn - The Knex.js connection object
 * @param {string} userEmail - The user's e-mail to check
 * @returns {promise | boolean} - Returns a promise that resolves to the user object if found, otherwise resolves to undefined.
 */
async function userWithProvidedEmailExists(conn, userEmail) {
  if (!userEmail) {
    return userEmail;
  }
  return conn("users").where({ email: userEmail }).first();
}

module.exports = userWithProvidedEmailExists;
