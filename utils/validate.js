module.exports = (data, requiredFields) => {
  const missingFields = [];
  const invalidDataFields = [];

  Object.entries(requiredFields).forEach(([field, expectedType]) => {
    if (!data[field]) {
      missingFields.push(field);
    } else if (typeof data[field] !== expectedType) {
      invalidDataFields.push(field);
    }
  });

  if (missingFields.length > 0 || invalidDataFields.length > 0) {
    const errorMessage = [
      missingFields.length > 0
        ? `Missing required fields: ${missingFields.join(", ")}`
        : "",
      invalidDataFields.length > 0
        ? `${
            missingFields.length > 0 ? "AND" : ""
          } Invalid data type for fields: ${invalidDataFields.join(", ")}`
        : "",
    ]
      .filter(Boolean)
      .join(" ");

    return { valid: false, message: errorMessage };
  } else return { valid: true };
};
