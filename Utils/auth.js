const config = require("../config");

function Auth(headers, callback) {
  if (!headers["api-key"])
    return callback({
      status: "failed",
      message: "API Key required!",
    });

  if (headers["api-key"] != config.apiKey)
    return callback({
      status: "failed",
      message: "API Key is invalid!",
    });

  return callback({
    status: "success",
    message: "Authorized.",
  });
}

module.exports = Auth;
