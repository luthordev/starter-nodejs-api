module.exports = {
  ADD_SUCCESS: "Data Saved Successfully",
  UPDATE_SUCCESS: "Data Updated Successfully",
  DELETE_SUCCESS: "Data Deleted Successfully",

  GET_NOT_FOUND: "Data you searched for does not exist",

  DATA_BODY_REQUIRED: "Data body required",
  PARAMS_ID_REQUIRED: "Parameter id required",

  AUTH_API_KEY_REQUIRED: "api-key required",
  AUTH_API_KEY_INVALID: "api-key is invalid",
  AUTH_AUTHORIZED: "authorized",

  UNKNOWN_ERROR:
    "Unknown error occured",

  PRISMA_ERRORS: {
    P1000: "Database authentication failed",
    P1001:
      "Cant reach database server. Make sure your database server is running",
    P1002: "Database connection timed out",
    P1003: "Database name does not exist on the database server",
    P1008: "Operation timed out",
    P1009: "Database name already exist on the database server",
    P1010: "User was denied access on the database",
    P1011: "Error opening a TLS connection",
    P1012: "Invalid schema",
    P2000: "Value is too long for the column",
    P2001: "The record searched for in the where condition does not exist",
    P2002: "Unique constraint failed. The same unique value alreaedy exist",
    P2003: "Foreign key constraint failed",
    P2004: "A constraint failed on the database",
    P2005: "The provided value is invalid for the field type",
    P2006: "The provided value is not valid",
    P2007: "Data validation error",
    P2008: "Failed to parse the query",
    P2009: "Failed to validate the query",
    P2010: "Raw query failed",
    P2011: "Null constraint violation",
    P2012: "Missing a required value",
    P2013: "Missing the required argument",
    P2014:
      "The change you are trying to make would violate the required relation",
    P2015: "A related record could not be found",
    P2016: "Query interpretation error",
    P2017: "The records for relation are not connected",
    P2018: "The required connected records were not found",
    P2019: "Input error",
    P2020: "Value out of range for the type",
    P2021: "The table does not exist in the current database.",
    P2022: "The column does not exist in the current database.",
    P2023: "Inconsistent column data",
    P2024: "Timed out fetching a new connection from the connection pool",
    P2025:
      "An operation failed because it depends on one or more records that were required but not found",
    P2026:
      "The current database provider doesn't support a feature that the query used",
    P2027: "Multiple errors occurred on the database during query execution",
    P2028: "Transaction API error",
    P2030:
      "Cannot find a fulltext index to use for the search, try adding a @@fulltext([Fields...]) to your schema",
    P2031:
      "Prisma needs to perform transactions, which requires your MongoDB server to be run as a replica set",
    P2033:
      "A number used in the query does not fit into a 64 bit signed integer. Consider using BigInt as field type if you're trying to store large integers",
    P2034:
      "Transaction failed due to a write conflict or a deadlock. Please retry your transaction",
  },
};
