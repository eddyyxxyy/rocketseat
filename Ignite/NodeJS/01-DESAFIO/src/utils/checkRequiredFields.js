export function checkRequiredFields(reqBody, ...fields) {
  if (!reqBody) {
    return fields;
  }

  const missing = fields.filter((field) => !reqBody[field]);

  return missing;
}
